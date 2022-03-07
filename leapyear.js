const year = 2021
function checkLeapYear(Year){
    if ((0== year %4)  && (0 != year %100) ||0 == year%100){
        console.log(year + "is leap year")

    } else{
        console.log(year + "is not leap year")
    }
}