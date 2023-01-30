const noStranger = (stringOfWords) => {
    //handle the string 
    stringOfWords = stringOfWords.toLowerCase()
    stringOfWords = stringOfWords.replaceAll(/[^A-Za-z ']/g, '')
    const arrayOfWords = stringOfWords.split(' ')
    
    //sets up a array to store all already found words, as well as a array to store how many times each of the words occures
    const everyUniqueWords = []
    const countPerUniqueWord = []

    //arrays to store friends and acquaintances 
    let acquaintancesArray = []
    const friendsArray = []

    arrayOfWords.map( (word) => {
        const index = everyUniqueWords.findIndex( (aUniqueWord) => aUniqueWord === word )
        if( index === -1) {
            everyUniqueWords.push(word)
            countPerUniqueWord.push(1)
        } else {
            countPerUniqueWord[index]++
            if(countPerUniqueWord[index] === 3) {
                acquaintancesArray.push(word)
            }
            if(countPerUniqueWord[index] === 5) {
                acquaintancesArray = acquaintancesArray.filter((aAquaintance) => aAquaintance !== word) 
                friendsArray.push(word)
            }
        }
    })

    return [acquaintancesArray, friendsArray]
}




const acquaintancesAndFriends = noStranger("a test test test a a yes yEs Yes yes yes testing testing Testing testing testing testing")
console.log(acquaintancesAndFriends[0])
console.log(acquaintancesAndFriends[1])