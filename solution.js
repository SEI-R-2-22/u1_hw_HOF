// You must RETURN your result in each function!

  /**
   * #1 DONE
   *  Using .forEach, add each number in the nums array to a new array.
   * @param nums => [1,2,3,4]
   */
   
   const nums = [1, 2, 3, 4, 5]

   function printNums(nums) {
     let printedNums = []
     nums.forEach(num => {
       printedNums.push(num)
     })
     return printedNums
}



  /**
   * #2 DONE
   * Using forEach, push the sum of n plus the index
   * to a new array and return the new array
   * @param nums => [1,2,3,4,5]
   */
  
  function returnSums(nums) {
    let newArr = []
    nums.forEach((value, index) => {
      newArr.push(value + index)
    })
    return newArr
}



  /**
   * #3 DONE
   * Using forEach return a number that is the total sum of all numbers in the array of objects.
   * The key for each object will be n
   * @param objs => [{n:1}]
   */
   
  function returnTotal(objs) {
    let sum = 0
    objs.forEach(value,index => {
     sum += value.n
   })
   return sum
}




/**
   * #4 done
   * @param decimals => [2.30, 2.40, 32.99]
   * Using .map, return an array of decimals formatted as dollars.
   * EX: {
   * input: [12.34, 9.99],
   * output: ['$12.34', '$9.99']
   * }
   * Hint: Not all decimals have two places, make sure to return each decimal with the proper decimal places. .toFixed may be useful :)
   */

function printMoney(decimals) {
  let newArr = []
  decimals.map(value => {
    newArr.push('$' + value.toFixed(2))
  })
  return newArr
}


 
 
 
  /**
   * #5 DONE
   * @param values => [{name: 'Joe', happy:false}]
   * Using .filter, return an array of objects where happy equals true
   */

function returnAllTrueValues(values) {
const happy = values.filter((value) => {
  return value.happy === true
})
return happy
}



 /**
   * #6 done
   * @param nums => [1,2,3,4]
   * Using .reduce, return the total sum of all numbers.
   * Each number should have 2 added to it.
   */
  //   3
  //   4 => 7

  function addTwo(nums) {
    let sum = nums.reduce((accumulator, value )=> {
      return accumulator + value + 2
    },0)
    return sum
  }



  /**
   * #7 
   * @param strings => ['g', 'f', 'z']
   * Using .reduce, return a new string containing each string from the strings array.
   */

  function joinStrings(strings) {
    const newString = strings.reduce((accumulator, value) => {
    return accumulator + value
  })
  return newString
  }

//Bonus
function sortObjectsByValue(objs) {
  /**
   * #8
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
