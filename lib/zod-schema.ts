import z from "zod/v4";

const requiredField = "Obavezno polje.";
const emailNotValid = "Email nije valjan.";
const messageTooLong = "Poruka je predugačka. Maksimalni broj znakova je 500.";

export const contactFormSchema = z.object({
  name: z.string(requiredField),
  email: z.email(emailNotValid),
  title: z.string(requiredField),
  message: z.string(requiredField).max(500, messageTooLong),
});
