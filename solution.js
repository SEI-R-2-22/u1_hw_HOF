// You must RETURN your result in each function!

function printNums(nums) {
  /**
   *  Using .forEach, add each number in the nums array to a new array.
   * @param nums => [1,2,3,4]
   */
  let newNum = []
  nums.forEach( (value) => {
    newNum.push(value)
  })
  return newNum
}


function returnSums(nums) {
  /**
   * Using forEach, push the sum of n plus the index
   * to a new array and return the new array
   * @param nums => [1,2,3,4,5]
   */
  let newArr= []
  nums.map((n, index) => {
    return n + index
  }).forEach( (value) => {
    newArr.push(value)
  })
return newArr
}

function returnTotal(objs) {
  /**
   * Using forEach return a number that is the total sum of all numbers in the array of objects.
   * The key for each object will be n
   * @param objs => [{n:1}]
   */

  let newObj = []
  objs.forEach( (num) => {
    newObj.push(num.n)
  })
  return newObj.reduce( (number, value) => {
    return number + value
  })
}

// ARRAY OF OBJECTS
// // pull info from array
////// pull info from the obj
// return number that is the total sum of all nums



function printMoney(decimals) {
  /**
   * @param decimals => [2.30, 2.40, 32.99]
   * Using .map, return an array of decimals formatted as dollars.
   * EX: {
   * input: [12.34, 9.99],
   * output: ['$12.34', '$9.99']
   * }
   * Hint: Not all decimals have two places, make sure to return each decimal with the proper decimal places. .toFixed may be useful :)
   */
   let newMoney = []
   decimals.forEach((elements) => {
       newMoney.push(elements.toFixed(2))
   })
   
   return newMoney.map( (value) => {
       return '$' + value
   })
 
}

// Pull info from array and format as string usin
//use .toFixed to make sure all decimals are in place


function returnAllTrueValues(values) {
  /**
   * @param values => [{name: 'Joe', happy:false}]
   * Using .filter, return an array of objects where happy equals true
   */
  let arr = values.filter( (emo) => {
    if (emo.happy === true) {
      return emo
    }
  } )
  return arr
}

function addTwo(nums) {
  /**
   * @param nums => [1,2,3,4]
   * Using .reduce, return the total sum of all numbers.
   * Each number should have 2 added to it.
   */
  //   3
  //   4 => 7
return nums.map( (value) => {
    return value + 2
  }).reduce( (first, second) => {
    return first + second
  })
}

function joinStrings(strings) {
  /**
   * @param strings => ['g', 'f', 'z']
   * Using .reduce, return a new string containing each string from the strings array.
   */
  return strings.reduce((first, second)=> {
    return first + second
  })
}

//Bonus
function sortObjectsByValue(objs) {
  /**
   * @param objs => [{value: 1}, {value:2}, {value:23}]
   * Using .sort, sort the array of objects by the value key in ascending order
   * .sort documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   */
  return objs.sort( (a,b) => {
    return a.value - b.value
  })
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
