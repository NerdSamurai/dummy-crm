import express from 'express'
import { createLead, getAllLeads } from '../controllers/lead.controller'

const leadRouter = express.Router()

leadRouter.route('/').get(getAllLeads).post(createLead)

export { leadRouter }
