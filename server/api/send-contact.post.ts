import type { LibraryResponse, SendEmailV3_1 } from "node-mailjet";

import mailjet from "~/lib/email-provider";
import env from "~/lib/env";
import { contactFormSchema } from "~/lib/zod-schema";

export default defineEventHandler(async (event) => {
  const parseResult = await readValidatedBody(event, contactFormSchema.safeParse);

  if (!parseResult.success) {
    const statusMessage = parseResult
      .error
      .issues
      .map(issue => `${issue.path.join(" ")}: ${issue.message}`)
      .join("; ");

    const data = parseResult
      .error
      .issues
      .reduce((errors, issue) => {
        errors[issue.path.join(" ")] = issue.message;
        return errors;
      }, {} as Record<string, string>);

    return sendError(event, createError({
      statusCode: 422,
      statusMessage,
      data,
    }));
  }

  const data: SendEmailV3_1.Body = {
    Messages: [
      {
        From: {
          Email: env.MAILJET_FROM_EMAIL,
          Name: env.MAILJET_FROM_NAME,
        },
        To: [
          {
            Email: env.MAILJET_TO_EMAIL,
            Name: env.MAILJET_TO_NAME,
          },
        ],
        Subject: `${parseResult.data.title} - code-media.hr`,
        TextPart: "",
        HTMLPart: `
                <h1>${parseResult.data.title}</h1>
                <div style="max-width: 28rem;">
                    <p>${parseResult.data.message}</p>
                    <hr />
                </div>
                <h3>${parseResult.data.name}</h3>
                <h4>${parseResult.data.email}</h4>
            `,
      },
    ],
  };

  const result: LibraryResponse<SendEmailV3_1.Response> = await mailjet.post("send", { version: "v3.1" }).request(data);

  const { Status } = result.body.Messages[0];
  if (Status === "success") {
    return {
      statusCode: 200,
      statusMessage: "Ok",
    };
  }

  return sendError(event, createError({
    statusCode: 500,
    statusMessage: "Došlo je do pogreške. Pokušajte kasnije.",
  }));
});
