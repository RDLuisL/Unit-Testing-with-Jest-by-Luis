const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

let fromDollarToYen = (dolar)=>{
    return dolar * oneEuroIs.JPY / oneEuroIs.USD
}

let fromEuroToDollar = (euro)=>{
    return euro * oneEuroIs.USD 
}

let formYenToPound = (yen)=> {
    return yen * oneEuroIs.GBP / oneEuroIs.JPY
}

console.log(fromDollarToYen(1,oneEuroIs.JPY));
console.log(fromEuroToDollar(1,oneEuroIs.USD));
console.log(formYenToPound (1, oneEuroIs.GBP));

module.exports = { sum,fromDollarToYen,fromEuroToDollar,formYenToPound};