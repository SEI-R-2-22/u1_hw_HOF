let dollars = [13.99, 99.99, 32.99, 40.0]
let newMoney = dollars.map(function(dol){return '$' + dol.toFixed(2)})
console.log(newMoney)