// You must RETURN your result in each function!

function printNums(nums) {
  let arr1 = []
  nums.forEach((element) => {
    arr1.push(element)
    
     }) 
  return arr1;
 /**
   *  Using .forEach, add each number in the nums array to a new array.
   * @param nums => [1,2,3,4]
   */
}

function returnSums(nums) {
  let array2 = []
nums.forEach((num, index) => {
  array2.push(num+=index)
})
    //const sum = nums.forEach
    //return sum;
return array2;
  /**
   * Using forEach, push the sum of n plus the index
   * to a new array and return the new array
   * @param nums => [1,2,3,4,5]
   */
}


  function returnTotal(objs) {
    let total = 0
     objs.forEach((elem) => {total+= elem.n})
   return total}
  /**
   * Using forEach return a number that is the total sum of all numbers in the array of objects.
   * The key for each object will be n
   * @param objs => [{n:1}]
   */


function printMoney(decimals) {
    const b = decimals.map(x => (x.toFixed(2)))
          return `$${b}`         }
    
  /**
   * @param decimals => [2.30, 2.40, 32.99]
   * Using .map, return an array of decimals formatted as dollars.
   * EX: {
   * input: [12.34, 9.99],
   * output: ['$12.34', '$9.99']
   * }
   * Hint: Not all decimals have two places, make sure to return each decimal with the proper decimal places. .toFixed may be useful :)
   */


function returnAllTrueValues(values) {values.filter(x => (x.happy === 'true'));}
    /** return 
   * @param values => [{name: 'Joe', happy:false}]
   * Using .filter, return an array of objects where happy equals true
   */


function addTwo(nums) {
  /**
   * @param nums => [1,2,3,4]
   * Using .reduce, return the total sum of all numbers.
   * Each number should have 2 added to it.
   */
  //   3
  //   4 => 7
  let sum = nums.reduce((accumalator, value) => {
    return accumalator + value +2
  }, 0)
  return sum
}

function joinStrings(strings) {
  let z = strings.reduce((a,b) => {return a+b})
    return z}
  /**
   * @param strings => ['g', 'f', 'z']
   * Using .reduce, return a new string containing each string from the strings array.
   */


//Bonus
function sortObjectsByValue(objs) {
  let x = objs.sort((a,b) => {return a.value-b.value})
  return x
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
