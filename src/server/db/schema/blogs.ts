import { index, pgTable, text, uuid, varchar } from "drizzle-orm/pg-core"

import { users } from "./auth"
import { timestamps } from "./_timestamps"

export const blogs = pgTable(
  "blogs",
  {
    id: uuid().primaryKey(),
    title: varchar({ length: 520 }).notNull(),
    slug: varchar({ length: 520 }).notNull().unique(),
    content: text().notNull(),
    userId: varchar({ length: 255 })
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    ...timestamps
  },
  (table) => [index().on(table.slug), index().on(table.userId)]
)
