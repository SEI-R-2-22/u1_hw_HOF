// You must RETURN your result in each function!
// let i = 0

let globalArray = [1,2,3,4]
let myPets = ["dog","cat","tyrannosaurus rex"]

function printNums(nums) {
  let newArray = []
  nums.forEach((theNumber) => {
    newArray.push(theNumber)
  })
  return newArray
  
  /**
  *  Using .forEach, add each number in the nums array to a new array.
  //  * @param nums => [1,2,3,4]
  */
}
printNums(globalArray)





function returnSums(nums) {
  theSumArray = []
  nums.forEach((theSum, theIndex) => {
    theSumArray.push(theSum + theIndex)
    
    
    
  })
  return theSumArray
  
  /**
  * Using forEach, push the sum of n plus the index
  * to a new array and return the new array
  * @param nums => [1,2,3,4,5]
  */
}

returnSums(globalArray)





myObjs = [{n:1}, {n:2}, {n:3}]

function returnTotal(objs) {
  
  let theFreshOut = [];
  
  objs.forEach((objSum) => {
    
    theFreshOut.push(objSum.n);
    
  })
  let result = theFreshOut.reduce((accumulator, value) => {
    
    return accumulator + value;
    
  }) 
  return result
}

/**
* Using forEach return a number that is the total sum of all numbers in the array of objects.
* The key for each objec
* t will be n
* @param objs => [{n:1}]
*/

// returnTotal(myObjs)
let theMoney = [2.30432, 2.40234, 32.99234]

function printMoney(decimals) {
  let savings = decimals.map((theCash) => {
    return "$" + theCash.toFixed(2)
    
  })
  
  return savings
  
  
  
  /**
  * @param decimals => [2.30, 2.40, 32.99]
  * Using .map, return an array of decimals formatted as dollars.
  * EX: {
  * input: [12.34, 9.99],
  * output: ['$12.34', '$9.99']
  * }
  * Hint: Not all decimals have two places, make sure to return each decimal with the proper decimal places. .toFixed may be useful :) //toFixed
  */
}
printMoney(theMoney)

let theValues = [{name: 'Joe', happy:false},{name: 'Chaz', happy:true}]

function returnAllTrueValues(values) {
  let theNext = values.filter((theFalse) => {
    if(theFalse.happy === true){
      return theFalse;
    }
    
  })
  return theNext
  
  
  
  /**
  * @param values => [{name: 'Joe', happy:false}]
  * Using .filter, return an array of objects where happy equals true
  */
}

theNums = [1,2,3,4]

function addTwo(nums) {
  let anotherOne = nums.map((theLateValue) => {
    return theLateValue + 2
  })
  let sum = anotherOne.reduce((accumulator, value) => {
    return accumulator + value
  })
  return sum
  
  
  /**
  * @param nums => [1,2,3,4]
  * Using .reduce, return the total sum of all numbers.
  * Each number should have 2 added to it.
  */
  
  //   3
  //   4 => 7
}
addTwo(theNums)

let strinGis = ['g', 'f', 'z']

function joinStrings(strings) {
  let theValu = strings.reduce((accumulator, val) => {
    return accumulator + val
  })
  return theValu
  
  /**
  * @param strings => ['g', 'f', 'z']
  * Using .reduce, return a new string containing each string from the strings array.
  */
}
console.log(joinStrings(strinGis))
joinStrings(strinGis)


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
