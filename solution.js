// You must RETURN your result in each function!

function printNums(nums) {

  const array = []
  nums.forEach((el) => {
    array.push(el)
  })
  return array 
{
}
///////////////////////////////////////////////////////////////////////
  /**
   *  Using .forEach, add each number in the nums array to a new array.
   * @param nums => [1,2,3,4]
   */
}

function returnSums(nums) {
  const array = []
  nums.forEach((num, index) => {
    array.push(num + index)
  })
  return array
  
  ////////////////////////////////////////////////////////////////
  /**
   * Using forEach, push the sum of n plus the index
   * to a new array and return the new array
   * @param nums => [1,2,3,4,5]
   */
}

function returnTotal(objs) {
  ////////////////////////////////////////////////////////////////////
  /**
   * Using forEach return a number that is the total sum of all numbers in the array of objects.
   * The key for each object will be n
   * @param objs => [{n:1}]
   */
//   let newNumber = 0;
//   objs.reduce((number, value) => {
// return number + value.n
//   } ).forEach((numbers) => {
//     newNumber.push(numbers)
//   })
// return newNumber

// const sum = 0
//   objs.forEach((num) => {
//     sum = sum + num.n
//   })
//   return sum

let sum = 0
  objs.forEach((num) => {
    sum = sum + num.n
  })
  return sum


}
///////////////////////////////////////////////////////////////////////////////////////////////

// function printMoney(decimals) {
//   let money = decimals.map((numbers) => {
//   return '$' + numbers.toFixed(2)
//   })
//   return $

function printMoney(decimals) {
  let money = decimals.map((num) => {
  return '$' + num.toFixed(2)
  })
  return money

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
// pull array using map function 
// arrange array when map

// function returnAllTrueValues(values) {
//  const happy = values.filter((feeling) => feeling.happy === true)
//  return feeling

// function returnAllTrueValues(values) {
//   const happy = values.filter((emotion) => emotion.happy === true)
//   return emotion

function returnAllTrueValues(values) {
  const happy = values.filter((value) => {
    return value.happy === true
  })
  return happy 
 ////////////////////////////////////////////////////////////////////////
  /**
   * @param values => [{name: 'Joe', happy:false}]
   * Using .filter, return an array of objects where happy equals true
   */
}

function addTwo(nums) {
  
  const sum = nums.reduce((accumulator, value) => {
    return accumulator + value + 2
  }, 0)
  return sum

  /**
   * @param nums => [1,2,3,4]
   * Using .reduce, return the total sum of all numbers.
   * Each number should have 2 added to it.
   */
  //   3
  //   4 => 7
}
///////////////////////////////////////////////////////////////////////

// function joinStrings(strings) {
//   const words = strings.reduce((accumulator, value) => {
//     return accumulator + strings
//   })
//   return words
function joinStrings(strings) {
  const words = strings.reduce((accumulator, string) => {
    return accumulator + string
  })
  return words
  /**
   * @param strings => ['g', 'f', 'z']
   * Using .reduce, return a new string containing each string from the strings array.
   */
}
///////////////////////////////////////////////////////////////////////////
//Bonus
function sortObjectsByValue(objs) {
  const sorting = objs.sort(function (a, b) {
    return a.value - b.value
  })
  return sorting


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
