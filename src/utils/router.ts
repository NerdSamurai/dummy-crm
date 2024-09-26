import { Express } from 'express'
import { customerRouter } from '../routes/customer.route'
import { leadRouter } from '../routes/lead.route'

export function registerRoutes(app: Express) {
    app.use('/api/customers', customerRouter)
    app.use('/api/leads', leadRouter)
}
