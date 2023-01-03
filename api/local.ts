import { app } from "@api/server/app"
import { env } from "@api/utils/env"

app.listen(env.PORT, () => console.log(`Server running on port ${env.PORT}`))
