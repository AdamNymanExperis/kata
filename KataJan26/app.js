const HappyAlgorithm = (nr) => {
    return HappyRecursion(nr, 1, [])
}

const HappyRecursion = (nr, index, previousNrs) => {
    const str = nr.toString()
    const arr = str.split('')
    let sum = 0

    arr.map( (digit) => {
        const current = parseInt(digit, 10)
        sum = sum + Math.pow(current, 2)
    })

    if(sum === 1){
        return `HAPPY ${index}`
    }

    for(i = 0; i < previousNrs.length; i++){
        if(sum === previousNrs[i]) {
            return `SAD ${index}`
        }
    }

    previousNrs.push(nr)
    index++
    return HappyRecursion(sum, index, previousNrs)
}

console.log(HappyAlgorithm(139))
console.log(HappyAlgorithm(1))
console.log(HappyAlgorithm(67))
console.log(HappyAlgorithm(89))