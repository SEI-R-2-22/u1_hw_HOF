// You must RETURN your result in each function!
function printNums(nums) {
  /**
   *  Using .forEach, add each number in the nums array to a new array.
   * const nums = [1,2,3,4]
   */
  let newArr = []
  function anyNums(num){
    newArr.push(num)
  }
  nums.forEach(anyNums)
  return newArr
}

function returnSums(nums) {
  /**
   * Using forEach, push the sum of n plus the index
   * to a new array and return the new array
   * @param nums => [1,2,3,4,5]
   */
  let newArr = []
  function myFunction(n, idx){
    newArr.push(n + idx)
  }
  nums.forEach(myFunction)
  return newArr 
}

function returnTotal(objs) {
  /**
   * Using forEach return a number that is the total sum of all numbers in the array of objects.
   * The key for each object will be n
   * @param objs => [{n:1}]
   */
let results = 0
objs.forEach((numberss) => {
  results =results + numberss.n
})
return results
}


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

  //  return  decimals.map(num => (num).toFixed(2))
  return decimals.map(num => '$' + (num).toFixed(2).toString())
}

function returnAllTrueValues(values) {
  /**
   * @param values => [{name: 'Joe', happy:false}]
   * Using .filter, return an array of objects where happy equals true
   */
  let result = values.filter(checkHappy)
  function checkHappy(person) {
    return person.happy
  }
  return result

}


function addTwo(nums) {
  /**
   * @param nums => [1,2,3,4]
   * Using .reduce, return the total sum of all numbers.
   * Each number should have 2 added to it.
   */
  //   3
      let sum = nums.reduce(function (a, b) {
        return a + b + 2
      },0)
    return sum
    }


function joinStrings(strings) {
  /**
   * @param strings => ['g', 'f', 'z']
   * Using .reduce, return a new string containing each string from the strings array.
   */
   return strings.reduce ((a, b) => (a + b), '')
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

// printNums([1, 2, 3, 4, 5])
// printNums([1, 3, 5, 7, 9])
let temp = printNums([1, 2, 3, 4, 5])
console.log("printNums", temp)
let temp2 = returnSums([1, 2, 3, 4, 5])
console.log("returnSums", temp2)
let temp3 = returnTotal([{n:1}, {n:5}, {n:7}])
console.log("returnTotal", temp3)
let temp4 = printMoney([2.30, 2.40, 32.99, 32.949])
console.log(temp4)
let temp5 = returnAllTrueValues([{name: 'Joe', happy:false}, {name: 'Josh', happy:true}])
console.log("returnAllTrueValues", temp5)
let temp6 = addTwo([1,2,3,4])
console.log(addTwo)
let temp7 = joinStrings (['g', 'f', 'z'])
console.log(temp7)