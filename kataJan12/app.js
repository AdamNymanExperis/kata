

const fizzBuzz = printFizzBuzz()

console.log(fizzBuzz)


function printFizzBuzz(){
    n=100
    let stringOfNr = ''

    for(i = 1; i<=n; i++){
        if(i>1) stringOfNr += ", "
        if(i%3 === 0 && i%5 === 0){
            stringOfNr += "FizzBuzz" 
        }
        else if(i%3 === 0){
            stringOfNr += "Fizz"
        }
        else if(i%5 === 0){
            stringOfNr += "Buzz"
        } 
        else{
            stringOfNr += i
        }
    }
    
    return stringOfNr
}


