const GrantTheHint = (string) => {
    const wordArr = string.split(' ')
    const copy = [...wordArr]
    const longestWord = copy.reduce(
        (a, b) => {
            return a.length > b.length ? a : b;
        }
    )
    const hintArr = []

    for(let counter = 0; counter < longestWord.length; counter++){
        let hiddenWordArr = ""
        for(let currentWord = 0; currentWord < wordArr.length; currentWord++){
            const revealedLetters = wordArr[currentWord].substring(0, counter)
            let blanks = ''
            if(wordArr[currentWord].length > counter){
                const difference = wordArr[currentWord].length - counter
                
                for(let nrOfBlank = 0; nrOfBlank < difference; nrOfBlank++){
                    blanks += '_'
                }
            }
            hiddenWordArr = `${hiddenWordArr}${revealedLetters}${blanks} `
        }
        hintArr.push(hiddenWordArr)
    }

    return hintArr
}


console.log(GrantTheHint('testing a test'))