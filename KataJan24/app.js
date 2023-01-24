
/* 
const howUnlucky = (year) => {
    const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'december']
    let current
    let count = 0

    for(let i = 0; i < monthArr.length; i++){
        current = monthArr[i]
        const the13th = new Date(`${current} 13, ${year} 23:15:30`)
        const dayOf13th = the13th.getDay()
        if(dayOf13th === 5){
            count++
        }
    }
    return count
}*/

const howUnlucky = (year) => {
    let month 
    let count = 0
    for(let i = 1; i <= 12; i++){
        if(i < 10) {
            month = `0${i}` 
        } else {
            month = i
        }
        const the13th = new Date(`${year}-${month}-13`)
        const dayOf13th = the13th.getDay()
        if(dayOf13th === 5){
            count++
        }
    }
    return count
}

console.log(howUnlucky(2020))
console.log(howUnlucky(2026))
console.log(howUnlucky(2016))
