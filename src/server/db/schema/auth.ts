import { sql } from "drizzle-orm"
import {
  pgTable,
  text,
  timestamp,
  boolean,
  index,
  varchar
} from "drizzle-orm/pg-core"

import { timestamps } from "./_timestamps"

export const users = pgTable(
  "users",
  {
    id: varchar({ length: 255 }).primaryKey(),
    name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 320 }).notNull().unique(),
    emailVerified: boolean().notNull().default(false),
    image: text(),
    interests: varchar({ length: 255 })
      .array()
      .notNull()
      .default(sql`'{}'::varchar[]`),
    ...timestamps
  },
  (table) => [index().on(table.email)]
)

export const sessions = pgTable(
  "sessions",
  {
    id: varchar({ length: 255 }).primaryKey(),
    expiresAt: timestamp().notNull(),
    token: text().notNull().unique(),
    ipAddress: varchar({ length: 255 }),
    userAgent: text(),
    userId: varchar({ length: 255 })
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    ...timestamps
  },
  (table) => [index().on(table.userId), index().on(table.token)]
)

export const accounts = pgTable(
  "accounts",
  {
    id: varchar({ length: 255 }).primaryKey(),
    accountId: text().notNull(),
    providerId: text().notNull(),
    accessToken: text(),
    refreshToken: text(),
    idToken: text(),
    accessTokenExpiresAt: timestamp(),
    refreshTokenExpiresAt: timestamp(),
    scope: text(),
    password: text(),
    userId: varchar({ length: 255 })
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    ...timestamps
  },
  (table) => [index().on(table.userId)]
)

export const verifications = pgTable(
  "verifications",
  {
    id: varchar({ length: 255 }).primaryKey(),
    identifier: varchar({ length: 320 }).notNull(),
    value: text().notNull(),
    expiresAt: timestamp().notNull(),
    ...timestamps
  },
  (table) => [index().on(table.identifier)]
)
