import { CreateCustomerDto } from '../dtos/customer.dto'
import customerTable from '../models/customer.model'
import { db } from '../utils/db'

export async function getAllCustomersService() {
    const customers = await db.select().from(customerTable)

    return customers
}
export async function createCustomerService(dto: CreateCustomerDto) {
    const { firstName, lastName } = dto

    const customer = await db
        .insert(customerTable)
        .values({
            firstName,
            lastName,
        })
        .returning()

    return customer
}
