
const countBoomerangs = (nrArr) => {
    
    count = 0

    for(i = 0; i < nrArr.length; i++){
        if(nrArr[i] === nrArr[i+2] && nrArr[i] !== nrArr[i+1]){
            count++
        }
    }
    
    /*
    first = 0
    middle = 1 
    last = 2 

    while(last < nrArr.length){
        if(nrArr[first] === nrArr[last] && nrArr[first] !== nrArr[middle]){
            count++
        }
    
        first++
        middle++
        last++
    }*/

    return count
}

console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]))
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]))
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]))
console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1]))