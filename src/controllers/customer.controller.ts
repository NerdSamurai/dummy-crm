import { Request, Response } from 'express'
import { CreateCustomerDto } from '../dtos/customer.dto'
import {
    createCustomerService,
    getAllCustomersService,
} from '../services/customer.service'

export async function getAllCustomers(_: Request, res: Response) {
    const taskResponse = await getAllCustomersService()

    res.json(taskResponse)
}

export async function createCustomer(req: Request, res: Response) {
    const { firstName, lastName } = req.body

    const taskResponse = await createCustomerService(
        new CreateCustomerDto(firstName, lastName)
    )

    res.json(taskResponse)
}
