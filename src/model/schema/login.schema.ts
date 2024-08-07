import { z } from "zod";

const logInFormSchema = z.object({
  emailAddress: z.string().email(),
  password: z.string().min(8),
});

export default logInFormSchema;
