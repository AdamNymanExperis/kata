
const shuffleCount = (deckSize) => {
    const deckArray = []
    for(let i = 1; i <= deckSize; i++){
        deckArray.push(i)
    }

    let shuffledArray = [...deckArray]
    let count = 0

    while(count === 0 || !isEqual(shuffledArray, deckArray) ){
        const firstHalf = shuffledArray.slice(0,deckSize/2)
        const secondHalf = shuffledArray.slice(deckSize/2,deckSize)

    
        shuffledArray = []
        
        for(let i = 0; i < deckSize/2; i++){
            shuffledArray.push(firstHalf[i])
            shuffledArray.push(secondHalf[i])
        }
        count++
    }
    
    return count
}


const isEqual = (arr1, arr2) => {
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i] ) return false
    }
    return true
}

console.log(shuffleCount(8)) 
console.log(shuffleCount(14)) 
console.log(shuffleCount(52)) 