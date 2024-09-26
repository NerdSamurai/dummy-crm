import { integer, pgTable, varchar } from 'drizzle-orm/pg-core'

const customerTable = pgTable('customer', {
    id: integer('id')
        .primaryKey()
        .generatedAlwaysAsIdentity({ startWith: 1000 }),
    firstName: varchar('name', { length: 255 }).notNull(),
    lastName: varchar('description', { length: 255 }),
})

export default customerTable
