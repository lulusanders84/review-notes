export const capWord = (word) => {
    return word.toLowerCase() !== "pa" ? word.charAt(0).toUpperCase() + word.substring(1) : word.toUpperCase()
}