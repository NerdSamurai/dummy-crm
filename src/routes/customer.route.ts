import express from 'express'
import {
    createCustomer,
    getAllCustomers,
} from '../controllers/customer.controller'

const customerRouter = express.Router()

customerRouter.route('/').get(getAllCustomers).post(createCustomer)

export { customerRouter }
