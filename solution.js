// You must RETURN your result in each function!
const decimals = [2.30, 2.40, 32.99]
const nums = [1, 4, 5, 7, 9, 10, 12, 15]
moneyArr = [2.30, 1.4, 1.99, 2.73]
const items = [
  { name: 'Joe', happy: false },
  { name: 'Beth', happy: true },
  { name: 'Ruth', happy: true },
  { name: 'Bob', happy: false },
  { name: 'Kev', happy: false },
  { name: 'Becky', happy: true }]
  
const strings = ['h', 'e', 'l', 'l', 'o']

//////////////////     1      ////////////////////
function printNums(nums) {
  let printedNums = []
  nums.forEach(num => {
  printedNums.push(num);
});
return printedNums
}
console.log(printNums(nums))

///////////////////     2     /////////////////////

function returnSums(nums) {
  let newArray = [];
  nums.forEach((value, index) => {
    newArray.push(numsArray + index++)  /// creating the for loop
   })
   return newArray
   /**
   * Using forEach, push the sum of n plus the index
   * to a new array and return the new array
   * @param nums => [1,2,3,4,5]
   */
 }
 console.log(returnSums(nums))

//////////////////        3        ////////////////////

function returnTotal(objs) {
  let newSum = 0
  objs.forEach((element) => { newSum += element })
  return newSum
  /**
   * Using forEach return a number that is the total sum of all numbers in the array of objects.
   * The key for each object will be n
   * @param objs => [{n:1}]
   */
} 
console.log(returnTotal(nums))


////////////////////       4       ///////////////////

    // let dollarArray = [] 
      
  function printMoney(decimals) {
      testArr = []
      decimals.map (float => {
        dollarAmount = '$' + float.toFixed(2)
        testArr.push(dollarAmount)
      })
      return testArr
    }
    console.log(printMoney(moneyArr))

  /**
   * @param decimals => [2.30, 2.40, 32.99]
   * Using .map, return an array of decimals formatted as dollars.
   * EX: {
   * input: [12.34, 9.99],
   * output: ['$12.34', '$9.99']
   * }
   * Hint: Not all decimals have two places, make sure to return each decimal with the proper decimal places. .toFixed may be useful :)
   */
 
 //////////////////////////////////////////////////////

 function returnAllTrueValues(values) {
  /**
   * @param values => [{name: 'Joe', happy:false}]
   * Using .filter, return an array of objects where happy equals true
   */
    const happy = items.filter(function(obj) {
    return (obj.happy === true) 
   })
   return happy
}

console.log(returnAllTrueValues())

function addTwo(nums) {
    return nums.reduce((a, cV) => {
    return a + cV + 2;             
    }, 0)

  //  * @param nums => [1,2,3,4]
  //  * Using .reduce, return the total sum of all numbers.
  //  * Each number should have 2 added to it.
  //  */
  //   3
  //   4 => 7
}
console.log(addTwo(nums))



function joinStrings(strings) {
    return strings.reduce((a, cV) => {
    return a + cV ;             
    })

  
  /**
   * @param strings => ['g', 'f', 'z']
   * Using .reduce, return a new string containing each string from the strings array.
   */
}
console.log(joinStrings(strings))

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
