function generateEstoniaID(): string {
    const prefix = 'EST-'
    const randomNumber = Math.floor(1000 + Math.random() * 9000)
    return `${prefix}${randomNumber}`
}

function generateLatviaID () : string {
    const prefix = 'LVA-'
    const randomNumber = Math.floor(1000 + Math.random() * 9000)
    return `${prefix}${randomNumber}`
}

function generateLithuaniaID () : string {
    const prefix = 'LTU-'
    const randomNumber = Math.floor(1000 + Math.random() * 9000)
    return `${prefix}${randomNumber}`
}
export {generateEstoniaID, generateLatviaID, generateLithuaniaID}
