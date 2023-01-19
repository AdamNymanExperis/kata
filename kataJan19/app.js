
const elasticize = (word) => {
    const wordArr = Array.from(word)
    
    first = 0
    last = wordArr.length - 1
    count = 1
    elasticArr = []

    while(last >= first){
        for(i = 0; i < count; i++){
            elasticArr.push(wordArr[first])
        } 
               
        count++
        first++
        last--
    }

    const reverse = [...elasticArr].reverse()

    if(word.length % 2 != 0){
        for(i = 0; i< count; i++){
            elasticArr.pop()
        }
    }

    const final = elasticArr.concat(reverse).join('')
    return final
}

console.log(elasticize('anna'))
console.log(elasticize('kayak'))
console.log(elasticize('x'))