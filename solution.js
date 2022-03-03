// You must RETURN your result in each function!
let arrNum = [1, 2, 3, 4]
function printNums(nums) {
  /**
   *  Using .forEach, add each number in the nums array to a new array.
   * @param nums => [1,2,3,4]
   */
  let newNum = []
  nums.forEach( (value)=> {
   newNum.push(value)
  });  return newNum
}
console.log(printNums(arrNum))




let nums1 = [1, 2, 3, 4, 5]
function returnSums(nums) {
  /**
   * Using forEach, push the sum of n plus the index
   * to a new array and return the new array
   * @param nums => [1,2,3,4,5]
   */
   let nums2 = []
   nums.forEach( (n, index) => {
    nums2.push(n + index)
   })
   
   return  nums2
 
}
returnSums(nums1)
console.log(nums1)


function returnTotal(objs){
  /**
   * Using forEach return a number that is the total sum of all numbers in the array of objects.
   * The key for each object will be n
   * @param objs => [{n:1}]
   */
let sumNum = 0
objs.forEach((value) => {
  sumNum =sumNum + value.n
})
return sumNum
}
    
     
   ///use for each to total sum of all numbers in the array of objects
// ---pull info from the obj


function printMoney(decimals){ 
  return decimals.map((decimals) => '$' + decimals.toFixed(2))



}
  /**
   * @param decimals => [2.30, 2.40, 32.99]
   * Using .map, return an array of decimals formatted as dollars.
   * EX: {
   * input: [12.34, 9.99],
   * output: ['$12.34', '$9.99']
   * }
   * Hint: Not all decimals have two places, make sure to return each decimal with the proper decimal places. .toFixed may be useful :)
   */




//pull info from array using map function
//format the array when map
//assure decimals in same place


function returnAllTrueValues(values) {
 let happy= [] 
 values.filter( (element) =>{
    if(element.happy === true){ 
      happy.push(element)
    }
 }); return happy
}

  /**
   * @param values => [{name: 'Joe', happy:false}]
   * Using .filter, return an array of objects where happy equals true
   */


function addTwo(nums) {
  let sum = nums.reduce(function(accumulator, value) {
    return accumulator + value + 2
  },0)
return sum
}
  /**
   * @param nums => [1,2,3,4]
   * Using .reduce, return the total sum of all numbers.
   * Each number should have 2 added to it.
   */
  //   3
  //   4 => 7
  

function joinStrings(strings) {
  
    return strings.reduce( (accumulator, value) => accumulator + value, '')
  
}


  /**
   * @param strings => ['g', 'f', 'z']
   * Using .reduce, return a new string containing each string from the strings array.
   */

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
