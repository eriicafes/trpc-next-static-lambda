import { app } from "@api/server/app"
import { Handler, HandlerResponse } from "@netlify/functions"
import serverless from "serverless-http"

export const handler: Handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false

  const serverlessHandler = serverless(app)

  return serverlessHandler(event, context) as unknown as HandlerResponse
}
