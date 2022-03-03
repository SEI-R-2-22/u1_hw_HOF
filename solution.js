// You must RETURN your result in each function!
let nums = [1,2,3,4]
        function printNums(nums) {
          let printedNums = []
          nums.forEach(num => {
            printedNums.push(num)
          });
          return printedNums
  /**
   *  Using .forEach, add each number in the nums array to a new array.
   * @param nums => [1,2,3,4]
   */
}


function returnSums(nums) {
          let newArr = []      
          nums.forEach((value, index) => {
          newArr.push(value + index)
          })
          return newArr           
  /**
   * Using forEach, push the sum of n plus the index
   * to a new array and return the new array
   * @param nums => [1,2,3,4,5]
   */
}
// console.log(returnSums(nums))

let newArr = [{n:1}, {n:2}, {n:3}]
function returnTotal(objs) {
          let sum = 0
          objs.forEach((value, index) => {
          sum += value.n
          })
          return sum
  /**
   * Using forEach return a number that is the total sum of all numbers in the array of objects.
   * The key for each object will be n
   * @param objs => [{n:1}]
   */
}
// console.log(returnTotal(newArr))


let decimals = [2.30, 2.40, 32.99]
const printMoney = decimals.map((decimals) => {         
          let dollar = decimals.toFixed(2)
          return (`$ ${decimals}`)
  /**
   * @param decimals => [2.30, 2.40, 32.99]
   * Using .map, return an array of decimals formatted as dollars.
   * EX: {
   * input: [12.34, 9.99],
   * output: ['$12.34', '$9.99']
   * }
   * Hint: Not all decimals have two places, make sure to return each decimal with the proper decimal places. .toFixed may be useful :)
   */
})
// console.log(printMoney)


values = [{name: 'Joe', happy:false }]
const returnAllTrueValues = values.filter((values) => {
  values.happy = true
    return values 
  /**
   * @param values => [{name: 'Joe', happy:false}]
   * Using .filter, return an array of objects where happy equals true
   */
})
// console.log(returnAllTrueValues)


const addTwo = nums.reduce((a, b) => {
  return a + b + 2    
  /**
   * @param nums => [1,2,3,4]
   * Using .reduce, return the total sum of all numbers.
   * Each number should have 2 added to it.
   */
  //   3
  //   4 => 7
}, 0)
// console.log(addTwo)


strings = ['g', 'f', 'z']
const joinStrings = strings.reduce((a, b) => {
  
    
  
  /**
   * @param strings => ['g', 'f', 'z']
   * Using .reduce, return a new string containing each string from the strings array.
   */
})
// console.log(joinStrings)

//Bonus

let newObjs = [{value: 1}, {value:2}, {value:23}]
// function sortObjectsByValue(newObjs) {
          let sortObjectsByValue = newObjs.map((newObjs) => {
                     return newObjs.value          
          })
          // sort((a, b) => (a.value > b.value))
          // let sortObjectsByValue = newObjs.sort((a, b) => {
          //         newObjs.sort((a, b) => (a.value > b.value))
          //         newObjs.reverse
          //         return newObjs
                  
  /**
   * @param objs => [{value: 1}, {value:2}, {value:23}]
   * Using .sort, sort the array of objects by the value key in ascending order
   * .sort documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   */
// })
console.log(sortObjectsByValue)
module.exports = {
  printNums,
  returnSums,
  returnTotal,
  printMoney,
  returnAllTrueValues,
  sortObjectsByValue,
  addTwo,
  joinStrings
}


    // let newString = ""
      // return newString = `${a + b}`
 // // const sortObjectsByValue = objs.forEach((a, b) {
  //         // let newArr = []     
  //         objs.forEach((a, b) => {
  //             sum += a.value
  //           let stringIt = string(val)
  //     // console.log(stringIt)
  //           return stringIt.sort
  //         //   newArr.push(a + b)
  //         // })
  //         // return 

  // // let val = objs[{value}]
  // //     let stringIt = string(val)
  // //     console.log(stringIt)
  // //     return stringIt.sort
