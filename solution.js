// You must RETURN your result in each function!

const numbers = [1, 2, 3, 4]

 numbers.forEach((nums) => {
  return nums
  /**
   *  Using .forEach, add each number in the nums array to a new array.
   * @param nums => [1,2,3,4]
   */
})
// console.log(numbers)

const returnSums = [1, 2, 3, 4, 5]
 returnSums.forEach((a, b) => {
  return sum(a + b)
  /**
   * Using forEach, push the sum of n plus the index
   * to a new array and return the new array
   * @param nums => [1,2,3,4,5]
   */
})
const returnTotal = [{n:1}]
returnTotal.forEach((objs) => {
  return sum{objs: objs:a + objs:b}
  /**
   * Using forEach return a number that is the total sum of all numbers in the array of objects.
   * The key for each object will be n
   * @param objs => [{n:1}]
   */
})

decimals = [2.30, 2,40, 32.99]
const printMoney = decimals.map((decimal) => {
  return (Math.round(decimals * 100 / 100).toFixed(2))
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

const arrNames = [{name: 'Joe', happy:false}]
const returnAllTrueValues = arrNames.filter((values) => {
  return values.length > 3
  /**
   * @param values => [{name: 'Joe', happy:false}]
   * Using .filter, return an array of objects where happy equals true
   */
})
console.log(returnAllTrueValues)


const arrNums= [1, 2, 3, 4]
const  addTwo = arrNums.reduce((nums) => {
  return sum(nums + 2)
  /**
   * @param nums => [1,2,3,4]
   * Using .reduce, return the total sum of all numbers.
   * Each number should have 2 added to it.
   */
  //   3
  //   4 => 7
})


arrStrings = ['g', 'f', 'z']
const joinStrings = arrStrings.reduce((strings) => {
    return arrStrings.toString()

  /**
   * @param strings => ['g', 'f', 'z']
   * Using .reduce, return a new string containing each string from the strings array.
   */
})

//Bonus
function sortObjectsByValue(objs) {
  /**
   * @param objs => [{value: 1}, {value:2}, {value:23}]
   * Using .sort, sort the array of objects by the value key in ascending order
   * .sort documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   */
}

// module.exports = {
//   printNums,
//   returnSums,
//   returnTotal,
//   printMoney,
//   returnAllTrueValues,
//   sortObjectsByValue,
//   addTwo,
//   joinStrings
// }
