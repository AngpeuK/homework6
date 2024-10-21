import {generateEstoniaID, generateLatviaID, generateLithuaniaID} from "../src/IdGenerator";

test('should generate Estonian ID', () => {
    const id = generateEstoniaID()
    expect(id.startsWith('EST-')).toBe(true)
    expect(id.length).toBe(8)
    const prefix = id.slice(4) // Получаем часть после префикса
    expect(/^\d{4}$/.test(prefix)).toBe(true)

})

test('should generate Latvian ID', () => {
    const id = generateLatviaID()
    expect(id.startsWith('LVA-')).toBe(true)
    expect(id.length).toBe(8)
    const prefix = id.slice(4) // Получаем часть после префикса
    expect(/^\d{4}$/.test(prefix)).toBe(true)
})

test('should generate Lithuanian ID', () => {
    const id = generateLithuaniaID()
    expect(id.startsWith('LTU-')).toBe(true)
    expect(id.length).toBe(8)
    const prefix = id.slice(4) // Получаем часть после префикса
    expect(/^\d{4}$/.test(prefix)).toBe(true)
})