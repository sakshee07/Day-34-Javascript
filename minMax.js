function genrate(){
    return Math.floor(Math.random()*999+100)
}
let minNumber = 100
let maxNumber = 999
for(a =1; a<=5 ; a++){
    

    let number =  genrate();
    console.log(a+number)

    if (number > maxNumber )
    maxNumber = number;

    if (number<minNumber)
    minNumber = number;
}

console.log("max num : "+ maxNumber )
console.log("min num : "+minNumber)
