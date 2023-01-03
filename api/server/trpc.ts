import { initTRPC } from "@trpc/server"
import { promisify } from "util"
import { z } from "zod"
import { Context } from "./context"

const t = initTRPC.context<Context>().create()

export const router = t.router
export const procedure = t.procedure

export const appRouter = router({
  ping: t.procedure
    .input(z.string())
    .query(async ({ input }) => {
      const delay = promisify(setTimeout)
      await delay(1000)
      return { pong: input }
    }),
})

export type AppRouter = typeof appRouter
