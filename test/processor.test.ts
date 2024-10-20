import {Processor} from "../src/Processor"

describe('tests for Processor class', () => {
    let processor: Processor

    beforeEach(() => {
        processor = new Processor() // Создаем новый экземпляр перед каждым тестом
    })

    test('should not allow consent for user under 18', () => {
        //const result = processor.checkAge(17) // Проверяем возраст меньше 18
        expect(processor.checkAge(17)).toBe(false) // Ожидаем, что метод вернет false
        expect(processor.consentGiven).toBe(false) // Проверяем, что согласие недоступно
    })

    test('should allow consent for user 18 or older', () => {
        //const result = processor.checkAge(18) // Проверяем возраст 18
        expect(processor.checkAge(18)).toBe(true) // Ожидаем, что метод вернет true
        expect(processor.consentGiven).toBe(true) // Проверяем, что согласие доступно
    })

    test('should revoke consent correctly', () => {
        processor.checkAge(18) // Устанавливаем согласие для пользователя 18+
        expect(processor.consentGiven).toBe(true) // Проверяем, что согласие дано

        processor.revokeConsent() // Отзываем согласие
        expect(processor.consentGiven).toBe(false) // Проверяем, что согласие было отозвано
    })
})
