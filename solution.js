// You must RETURN your result in each function!

function printNums(nums) {
  /**
   *  Using .forEach, add each number in the nums array to a new array.
   * @param nums => [1,2,3,4]
   */
  let newArr = [];

  nums.forEach( (element) => {
    newArr.push(element)
  })
  return newArr;
}
  
function returnSums(nums) {
  /**
   * Using forEach, push the sum of n plus the index
   * to a new array and return the new array
   * @param nums => [1,2,3,4,5]
   */
   let arrPlusIdx = [];

   nums.forEach( (element, idx) => {
     arrPlusIdx.push(element + idx)
   })
   return arrPlusIdx;
}

function returnTotal(objs) {
  /**
   * Using forEach return a number that is the total sum of all numbers in the array of objects.
   * The key for each object will be n
   * @param objs => [{n:1}]
   */
   let sumNumsArr = 0;

   Object.keys(objs).forEach(key => {
     sumNumsArr += objs[key]['n'];
   })
   return sumNumsArr;
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
  const addDollar = decimals.map((element) => {
    return `$${element.toFixed(2)}`

  })
  return addDollar
}

function returnAllTrueValues(values) {
  /**
   * @param values => [{name: 'Joe', happy:false}]
   * Using .filter, return an array of objects where happy equals true
   */

  const valueToTrue = values.filter( (element) => {
    return (element['happy'] === true)
  })
  return valueToTrue
}

function addTwo(nums) {
  /**
   * @param nums => [1,2,3,4]
   * Using .reduce, return the total sum of all numbers.
   * Each number should have 2 added to it.
   */
  //   3
  //   4 => 7
  const plus2 = nums.reduce((accumulator, value) => {
    return (accumulator + value + 2)
  }, 0)
  console.log(plus2)
  return plus2
}

function joinStrings(strings) {
  /**
   * @param strings => ['g', 'f', 'z']
   * Using .reduce, return a new string containing each string from the strings array.
   */
  const strngsJoined = strings.reduce((accumulator, value) => {
    return accumulator + value
  })
  return strngsJoined
}

//Bonus
function sortObjectsByValue(objs) {
  /**
   * @param objs => [{value: 1}, {value:2}, {value:23}]
   * Using .sort, sort the array of objects by the value key in ascending order
   * .sort documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   */
  return objs.sort( (a,b) => {return(a.value - b.value)})
  
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
