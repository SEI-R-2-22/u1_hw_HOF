// You must RETURN your result in each function!

function printNums(nums) {
  let addEm = []
  nums.forEach((num) => {
    addEm.push(num)
  })
  return addEm
}

function returnSums(nums) {
  let newArray = []
  nums.forEach((num, index) => {
    newArray.push((num += index))
  })
  return newArray
  /**
   *  Using .forEach, add each number in the nums array to a new array.
   * @param nums => [1,2,3,4]
   */
}
/**
 * Using forEach, push the sum of n plus the index
 * to a new array and return the new array
 * @param nums => [1,2,3,4,5]
 */

function returnTotal(objs) {
  let sum = 0
  objs.forEach((num) => {
    sum += num.n
  })
  return sum
  /**
   * Using forEach return a number that is the total sum of all numbers in the array of objects.
   * The key for each object will be n
   * @param objs => [{n:1}]
   */
}

function printMoney(decimals) {
  const arrDecimals = decimals.map((decimals) => {
    const newArray = '$' + decimals.toFixed(2)
    return newArray
  })
  return arrDecimals
  /**
   * @param decimals => [2.30, 2.40, 32.99]
   * Using .map, return an array of decimals formatted as dollars.
   * EX: {
   * input: [12.34, 9.99],
   * output: ['$12.34', '$9.99']
   * }
   * Hint: Not all decimals have two places, make sure to return each decimal with the proper decimal places. .toFixed may be useful :)
   */
}

function returnAllTrueValues(values) {
  /**
   * @param values => [{name: 'Joe', happy:false}]
   * Using .filter, return an array of objects where happy equals true
   */
  const array = values.filter((num) => {
    return num.happy === true
  })
  return array
}

function addTwo(nums) {
  /**
   * @param nums => [1,2,3,4]
   * Using .reduce, return the total sum of all numbers.
   * Each number should have 2 added to it.
   */
  //   3
  //   4 => 7
  const addTwoo = nums.reduce((acc, value) => {
    return acc + 2 + value
  }, 0)
  return addTwoo
}

function joinStrings(strings) {
  let strings2 = strings.reduce((acc, value) => {
    return acc + value
  })
  return strings2
  /**
   * @param strings => ['g', 'f', 'z']
   * Using .reduce, return a new string containing each string from the strings array.
   */
}

//Bonus
function sortObjectsByValue(objs) {
  /**
   * @param objs => [{value: 1}, {value:2}, {value:23}]
   * Using .sort, sort the array of objects by the value key in ascending order
   * .sort documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   */
}

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
