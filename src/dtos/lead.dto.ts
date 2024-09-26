export class CreateLeadDto {
    customerId: number | null = null
    status = 0

    constructor(customerId: number, status: number) {
        this.customerId = customerId
        this.status = status
    }
}
