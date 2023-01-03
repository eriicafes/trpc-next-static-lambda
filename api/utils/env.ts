import dotenv from "dotenv";
import { z } from "zod";

dotenv.config()

const envSchema = z.object({
  PORT: z.string().default("5000").transform(p => parseInt(p))
})

const validated = envSchema.safeParse(process.env);

if (!validated.success) {
  console.error("Invalid environment variables:")
  console.error(
    ...Object
      .entries(validated.error.flatten().fieldErrors)
      .map(([key, errors]) => `${key}: ${errors?.join(", ")}`)
  )
  process.exit(1)
}

export const env = validated.data
