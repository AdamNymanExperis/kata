const getLength = (array) => {
    actualLength = 0
    actualLength += array.length
    array.forEach( (element) => {
        if(Array.isArray(element)) {
            actualLength--
            actualLength += getLength(element)
        }
    })
    return actualLength
} 

console.log(getLength([1,[2,3]]))   
console.log(getLength([1, [2, [3, 4]]]))
console.log(getLength([1, [2, [3, [4, [5, 6]]]]]))
console.log(getLength([1, [2], 1, [2], 1]))
console.log(getLength([]))