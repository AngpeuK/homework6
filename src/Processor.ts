export class Processor {
    consentGiven: boolean = false //Изначально согласие не дано


    checkAge(age: number): boolean {
        if (age >= 18) {
            this.consentGiven = true // Согласие доступно для пользователя
            return true
        } else {
            this.consentGiven = false // Согласие не доступно для пользователя
            return false
        }
    }


    revokeConsent(): void {
        this.consentGiven = false // Отозвать согласие
    }
}