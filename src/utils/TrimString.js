export const trimString = (str) => {
    let string = str.trim()

    while (string.includes('  ')) {
        string = string.replace('  ', ' ')
    }
    return string
}
