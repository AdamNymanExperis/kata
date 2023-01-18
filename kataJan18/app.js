/*
const charCount = (charToFind, word) => {
    if(charToFind.length > 1) throw error 
    let count = 0
    const wordArr = divideWord(...word)
    wordArr.map(letter => {if(letter === charToFind) count++})
    
    console.log(count)
}

const divideWord = (...letters) => {
    const wordArr = []
    letters.map(letter => wordArr.push(letter))
    
    return wordArr
} */

const charCount = (charToFind, word) => {
    if(charToFind.length > 1) throw error 
    return Array.from(word).filter((char) => char === charToFind).length
} 

console.log(charCount('a', 'edabit'))
console.log(charCount('c','Chamber of secrets'))
console.log(charCount('B', 'boxes are fun'))
console.log(charCount('b', 'big fat bubble'))
console.log(charCount('e', 'javascript is good'))
console.log(charCount('!', '!easy!'))
console.log(charCount('wow', 'the universe is wow'))

