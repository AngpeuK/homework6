import {User} from "./User";

export class Processor {

    giveConsent(user: User): void {
        user.consentGiven = true
    }


    verifyConsent(user: User): boolean {
        return user.consentGiven === true
    }

    checkAge(user: User): boolean {
        // return user.age >= 18;
        if (user.age >= 18) {
            return true
        } else {
            return false
        }
    }

    revokeConsent(user: User): void {
        user.consentGiven = false // Отозвать согласие
    }
}