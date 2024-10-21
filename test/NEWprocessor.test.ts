import {NewUser} from "../src/NewUser";
import {NewProcessor} from "../src/NewProcessor";

let user: NewUser
let processor: NewProcessor
describe('users aged 18 or over', () => {

})

beforeEach((): void => {
    processor = new NewProcessor()
    user = new NewUser('Andrei', 'Kuzmin', '5354100', 'Narva', 18)
})

test('check if new user is undefined', (): void => {
    expect(user.consentGiven).toBeUndefined()
})

test('check if processor gives consent to the user', (): void => {
    processor.giveConsent(user)
    expect(user.consentGiven).toBe(true)
})

test('verify if user has given his consent', (): void => {
    processor.giveConsent(user)
    expect(processor.verifyConsent(user)).toBeTruthy()
})

test('check that consent is not approved  when user has not given consent', (): void => {
    expect(processor.verifyConsent(user)).toBeFalsy()
})

//new tests homework 6
describe('when users aged under 18', () => {
    beforeEach((): void => {
        user = new NewUser('Andrei', 'Kuzmin', '5354100', 'Narva', 17)
        processor = new NewProcessor()
    })

    test('user under 18 is not able to give consent', (): void => {
        expect(processor.checkAge(user)).toBe(false)
    })
})

describe('when users aged 18 or over', () => {
    beforeEach((): void => {
        processor = new NewProcessor()
        user = new NewUser('Andrei', 'Kuzmin', '5354100', 'Narva', 18)
    })

    test('user aged 18 or over is able to give consent', (): void => {
        expect(processor.checkAge(user)).toBe(true)
    })

    test('revoke consent method works correctly', (): void => {
        processor.giveConsent(user)
        processor.revokeConsent(user)
        expect(user.consentGiven).toBe(false)
    })
})