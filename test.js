// const nums = [1,2,3,4,5]

/////////////////////
// const newArr = []
// nums.forEach((element) => {
//    newArr.push(element)
//   })
// console.log(newArr)


/////////////////////
// const newArr = []
// nums.forEach((element, index) => {
// newArr.push(element + index)},0)

// console.log(newArr)
 

/////////////////////
// const objs = [{n:1}]

// let totalSum = 0
// objs.forEach((obj) => {
//     totalSum += obj.n
// },0)
//   console.log (totalSum)



/////////////////////
// function printMoney(decimals) {
//     /**
//      * @param decimals => [2.30, 2.40, 32.99]
//      * Using .map, return an array of decimals formatted as dollars.
//      * EX: {
//      * input: [12.34, 9.99],
//      * output: ['$12.34', '$9.99']
//      * }
//      * Hint: Not all decimals have two places, make sure to return each decimal with the proper decimal places. .toFixed may be useful :)
//      */
//   }

const decimals = [2.30, 2.40, 32.99]

const decimalsNum = decimals.map((num) => {
    const newDecimals =`$${num.toFixed(2)}`
    console.log(newDecimals) 
})


