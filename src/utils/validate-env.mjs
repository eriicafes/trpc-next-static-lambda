import { z } from "zod";

export const envSchema = z.object({
  PORT: z.number().default(5000),
  API_BASE: z.string().optional(),
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

export const validatedEnv = validated.data
