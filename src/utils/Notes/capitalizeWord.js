export const capWord = (word) => {
    const length = word.length;
    return length > 3 
        ? word.charAt(0).toUpperCase() + word.substring(1) : word.toUpperCase()
}