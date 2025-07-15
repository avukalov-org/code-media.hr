import { z } from "zod";

import tryParseEnv from "./try-parse-env";

const EnvSchema = z.object({
  NODE_ENV: z.string(),
  MAILJET_APIKEY: z.string(),
  MAILJET_SECRET: z.string(),
  MAILJET_FROM_EMAIL: z.string(),
  MAILJET_FROM_NAME: z.string(),
  MAILJET_TO_EMAIL: z.string(),
  MAILJET_TO_NAME: z.string(),

  // TURSO_DATABASE_URL: z.string(),
  // TURSO_AUTH_TOKEN: z.string(),
});

export type EnvSchema = z.infer<typeof EnvSchema>;

tryParseEnv(EnvSchema);

// eslint-disable-next-line node/no-process-env
export default EnvSchema.parse(process.env);
