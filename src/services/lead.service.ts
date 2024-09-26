import { CreateLeadDto } from '../dtos/lead.dto'
import leadTable from '../models/lead.model'
import { db } from '../utils/db'

export async function getAllLeadsService() {
    const leads = await db.select().from(leadTable)

    return leads
}
export async function createLeadService(dto: CreateLeadDto) {
    const { customerId, status } = dto

    if (!customerId) {
        return
    }

    const lead = await db
        .insert(leadTable)
        .values({
            customerId,
            status,
        })
        .returning()

    return lead
}
