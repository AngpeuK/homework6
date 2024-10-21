export class NewUser {
    namn: string
    surname: string
    phone: string
    address: string
    age: number
    consentGiven: undefined | boolean


    constructor(namn: string, surname: string, phone: string, address: string, age: number) {
        this.namn = namn
        this.surname = surname
        this.phone = phone
        this.address = address
        this.age = age
    }
}