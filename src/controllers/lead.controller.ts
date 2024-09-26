import { Request, Response } from 'express'
import { createLeadService, getAllLeadsService } from '../services/lead.service'
import { CreateLeadDto } from '../dtos/lead.dto'

export async function getAllLeads(_: Request, res: Response) {
    const taskResponse = await getAllLeadsService()

    res.json(taskResponse)
}

export async function createLead(req: Request, res: Response) {
    const { firstName, lastName } = req.body

    const taskResponse = await createLeadService(
        new CreateLeadDto(firstName, lastName)
    )

    res.json(taskResponse)
}
