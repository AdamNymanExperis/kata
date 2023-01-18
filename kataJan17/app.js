
/*
const splitOnDoubleLetter = (word) => {
    
    const divideWord = (...letters) => {
        const wordArr = []
        letters.forEach(letter => wordArr.push(letter))
        
        return wordArr
    }

    const wordArr = divideWord(...word)

    const stringArr = []
    let current = 0
    let next = 1
    
    while(next < wordArr.length){
        if(wordArr[current] === wordArr[next]){
            const split = wordArr.splice(0, next)
            stringArr.push(split.join(''))
            current = 0
            next = 1
        } else {
            current++
            next++
        }
    }   

    if(stringArr[0]){
        stringArr.push(wordArr.join(''))
    }
    

    return stringArr
}*/

const splitOnDoubleLetter = (word) => {
    const wordArr = []
    let current = 0
    let next = 1

    while(next < word.length){
        if(word[current] === word[next]){
            wordArr.push(word.slice(0, current+1))
            word = word.slice(next, word.length)
            current = 0
            next = 1
        } else {
            current++
            next++
        } 
    }
    
    if(wordArr[0]){
        wordArr.push(word)
    }

    return wordArr
}


console.log(splitOnDoubleLetter('letter'))
console.log(splitOnDoubleLetter('really'))
console.log(splitOnDoubleLetter('happy'))
console.log(splitOnDoubleLetter('shall'))
console.log(splitOnDoubleLetter('tool'))
console.log(splitOnDoubleLetter('mississippi'))
console.log(splitOnDoubleLetter('easy'))





