import { z } from "zod"
import { envSchema } from "./validate-env.mjs"

export type Env = z.infer<typeof envSchema>

export const clientEnv = {
  PORT: Number(process.env.PORT),
  API_BASE: process.env.API_BASE,
} satisfies Env
