const maximumProfit = (weekArray) => {
    let maxProfit = 0
    let current = 0
    let next = 0

    while(current <= weekArray.length - 2){
        next = current + 1
        //skip to the next day, if that day has a lower price
        while(weekArray[current] > weekArray[next]){
            current++
            next++
        }
        currentProfit = maximumProfitCurrent(weekArray, current)
        
        //check the maximum profit of the current day against maximum profit of earlier interval
        if(currentProfit > maxProfit) maxProfit = currentProfit
        current++
    }
    console.log(maxProfit)
}

const maximumProfitCurrent = (weekArray, start) =>{
    let highest = 0

    //compare all the days after the current day to find the day with most highest price
    for(i = start+1; i < weekArray.length; i++){
        if(weekArray[i] > highest) highest = weekArray[i]
    }
    return highest - weekArray[start]
}

const weekArray1 = [8,5,12,9,19,1]
const weekArray2 = [2,4,9,3,8]
const weekArray3 = [21,12,11,9,6,3]

maximumProfit(weekArray1)
maximumProfit(weekArray2)
maximumProfit(weekArray3)