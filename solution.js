// You must RETURN your result in each function!
exArr = [1,2,3,4,5,6,7,8,9,10]
monArr = [5.36, 3.33, 12.98]



//test





function printNums(nums) {
  let printedNums = []
  nums.forEach(num => {
    printedNums.push(num)
  })
  return printedNums
  /**
   *  Using .forEach, add each number in the nums array to a new array.
   * @param nums => [1,2,3,4]
   */
}
// console.log(printNums(exArr))





function returnSums(nums) {
  let newArr =[]
  nums.forEach((num,i)=> 
    newArr.push(num+i++))
  return newArr
  /**
   * Using forEach, push the sum of n plus the index
   * to a new array and return the new array
   * @param nums => [1,2,3,4,5]
   */
}
console.log(returnSums(exArr))







function returnTotal(objs) {
  let newSum = 0
  objs.forEach((element) => {newSum += element })
  return newSum
  /**
   * Using forEach return a number that is the total sum of all numbers in the array of objects.
   * The key for each object will be n
   * @param objs => [{n:1}]
   */
}
// console.log(returnTotal(exArr))







function printMoney(decimals) {
  testArr = []
  decimals.map(float => {
    dollarAmount = `$`+ float.toFixed(2)
    testArr.push(dollarAmount)
  })
  return testArr

  /**
   * @param decimals => [2.30, 2.40, 32.99]
   * Using .map, return an array of decimals formatted as dollars.
   * EX: {
   * input: [12.34, 9.99],
   * output: ['$12.34', '$9.99']
   * }
   * Hint: Not all decimals have two places, make sure to return each decimal with the proper decimal places. .toFixed may be useful :)
   */
  // return decimals.map((decimal) => '$' + decimal.toFixed(2))
}
console.log(printMoney(monArr))



let things = [{name: 'Ryan', happy:false},
              {name: 'Tylus', happy:false},
              {name: 'Orion', happy:true},]




function returnAllTrueValues(values) {
const thingsTrue = values.filter((bool) => bool.happy)
 return thingsTrue
  /**
   * @param values => [{name: 'Joe', happy:false}]
   * Using .filter, return an array of objects where happy equals true
   */
}
console.log(returnAllTrueValues(things))









function addTwo(nums) {
return nums.reduce((accumulator, value) => {
    return accumulator + value +2
  }, 0)
  /**
   * @param nums => [1,2,3,4]
   * Using .reduce, return the total sum of all numbers.
   * Each number should have 2 added to it.
   */
  //   3
  //   4 => 7
}
console.log(addTwo(exArr))






const stringies = ['a','b','c','d','e']
function joinStrings(strings) {
  return strings.reduce((accumulator, value) => {
    return accumulator+value
  })
  /**
   * @param strings => ['g', 'f', 'z']
   * Using .reduce, return a new string containing each string from the strings array.
   */
}

console.log(joinStrings(stringies))

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
