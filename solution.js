// You must RETURN your result in each function!
//// COULD NOT FIGURE OUT HOW TO WRITE THIS WITHIN THE FUNCTIONS
/// TO PROPERLY PASS THE NPM TESTS. CONFUSED AS TO THE DIFFERENCE 
// IS BETWEEN WHAT WE LEARNED TODAY AND WRITING THIS WAY

function printNums(nums) {
  const newPNum = nums.forEach((num) => {
    return(nums)
  })
  return(newPNum)
  /**
   *  Using .forEach, add each number in the nums array to a new array.
   * @param nums => [1,2,3,4]
   */
}

function returnSums(nums) {
  const newSums = nums.forEach(num => {
    let sum = 0;
    return sum += num;
    
  })
  return(newSums)
  /**
   * Using forEach, push the sum of n plus the index
   * to a new array and return the new array
   * @param nums => [1,2,3,4,5]
   */
}

function returnTotal(objs) {
  const newTot = objs.forEach(obj => {
    return objs += obj 
  })
  /**
   * Using forEach return a number that is the total sum of all numbers in the array of objects.
   * The key for each object will be n
   * @param objs => [{n:1}]
   */
  return(newTot)
}

function printMoney(decimals) {
  const dollar = decimals.map((deci) => {
    return `$ ${deci}`
  })
  return(dollar)
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
  const newTru = values.filter(val => {
    if(val !== false){
      return val
    } else {
      return null;
    }
    return(newTru)
  })
  
  /**
   * @param values => [{name: 'Joe', happy:false}]
   * Using .filter, return an array of objects where happy equals true
   */
}

function addTwo(nums) {
  const newTwo = nums.reduce((a,b) => {
    return a + b
  })
  return(newTwo)
  /**
   * @param nums => [1,2,3,4]
   * Using .reduce, return the total sum of all numbers.
   * Each number should have 2 added to it.
   */
  //   3
  //   4 => 7
}

function joinStrings(strings) {
  const newStr = strings.reduce(str => {
    return(str)
  })
  /**
   * @param strings => ['g', 'f', 'z']
   * Using .reduce, return a new string containing each string from the strings array.
   */
}

//Bonus
function sortObjectsByValue(objs) {
  const newArr = objs.sort((a, b) => {
    return a - b
  /**
   * @param objs => [{value: 1}, {value:2}, {value:23}]
   * Using .sort, sort the array of objects by the value key in ascending order
   * .sort documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   */
  })
  return(newArr)
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
