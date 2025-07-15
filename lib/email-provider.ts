import Mailjet from "node-mailjet";

import env from "./env";

const mailjet = new Mailjet({
  apiKey: env.MAILJET_APIKEY,
  apiSecret: env.MAILJET_SECRET,
});

export default mailjet;
