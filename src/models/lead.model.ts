import { integer, pgTable, smallint } from 'drizzle-orm/pg-core'
import { customer } from '../utils/schema'

const leadTable = pgTable('lead', {
    id: integer('id')
        .primaryKey()
        .generatedAlwaysAsIdentity({ startWith: 1000 }),
    customerId: integer('customer_id')
        .references(() => customer.id)
        .notNull(),
    status: smallint('status').default(0).notNull(),
})

export default leadTable
