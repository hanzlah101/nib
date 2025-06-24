import { defineConfig } from "drizzle-kit"

import { env } from "@/env"

export default defineConfig({
  dialect: "postgresql",
  schema: "src/server/db/schema",
  strict: true,
  verbose: true,
  casing: "snake_case",
  dbCredentials: {
    url: env.DATABASE_URL
  }
})
