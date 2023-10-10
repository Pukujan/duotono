import { z } from "zod";

export const loginSchemas = z.object({
  email: z.string().nonempty().email(),
  password: z.string().nonempty(),
  // password: z.string().nonempty().min(5),
});
