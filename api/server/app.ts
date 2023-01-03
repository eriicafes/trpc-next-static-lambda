import { createExpressMiddleware } from "@trpc/server/adapters/express"
import cors from "cors"
import express from "express"
import { createContext } from "./context"
import { appRouter } from "./trpc"

export const app = express()

app.use(cors())

app.use("/api/trpc", createExpressMiddleware({
  router: appRouter,
  createContext,
}))
