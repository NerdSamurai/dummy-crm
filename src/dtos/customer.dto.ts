export class CreateCustomerDto {
    firstName: string
    lastName: string | null

    constructor(firstName: string, lastName: string | null) {
        this.firstName = firstName
        this.lastName = lastName
    }
}
