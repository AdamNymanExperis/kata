
const correctTitle = (title) => {
    title = title.toLowerCase().replaceAll(', ', ',').replaceAll(',', ', ')
    const lowerCaseWordArr = title.split(' ')
    const correctedWordArr = []

    lowerCaseWordArr.forEach( (word) => {
        if(word === 'and' || word === 'the' || word === 'of' || word === 'in'){
            correctedWordArr.push(word)
        }
        else {
            const firstLetter = word.charAt(0).toUpperCase()
            const restOfWord = word.substring(1, word.length)
    
            correctedWordArr.push(firstLetter + restOfWord)
        }
    })

    title = correctedWordArr.join(' ')
    if (title.charAt(title.length-1) !== '.') title += '.'
    return title
}

console.log(correctTitle('jOn Snow, kiNg IN thE noRth'))
console.log(correctTitle('sansa stark,lady of winterfell.'))
console.log(correctTitle('TYRION LANNISTER, HAND OF THE QUEEN.'))