import {NewUser} from "./NewUser";

export class NewProcessor {

    giveConsent(user: NewUser): void {
        user.consentGiven = true
    }


    verifyConsent(user: NewUser): boolean {
        return user.consentGiven === true
    }

    checkAge(user: NewUser): boolean {
        // return user.age >= 18;
        if (user.age >= 18) {
            return true
        } else {
            return false
        }
    }

    revokeConsent(user: NewUser): void {
        user.consentGiven = false // Отозвать согласие
    }
}