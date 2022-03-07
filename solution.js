// You must RETURN your result in each function!

  /**
   *  Using .forEach, add each number in the nums array to a new array.
   * @param nums => [1,2,3,4]
   */
  // function printNums(nums) {
  //   let newArr = []
  //   nums.forEach(num => {
  //     newArr.push(num)
  //   })
  //   return newArr
  // }

// solution

const nums = [1,2,3,4]

const arrayNums = (num, array) => {
  // console.log(num)
  return num;
}
[nums].forEach(arrayNums);

nums.forEach(nums => {
  Array.from(nums);
  console.log(Array.from(nums))
  // console.log(num)
})
nums.forEach(arrayLike, (num) => {
  Array.from(arrayLike, (num));
  console.log(Array.from(arrayLike, num))
  // console.log(num)
})



////////////////////////////////////////////

  /**
   * Using forEach, push the sum of n plus the index
   * to a new array and return the new array
   * @param nums => [1,2,3,4,5]
   */
  // function returnSums(num) {
  //   
  // }

// solution

const nums = [1,2,3,4,5]

let newArr = [];

nums.forEach((num, idx) => {
  const newNum = num += idx;

  newArr.push(newNum)
})

function returnSums(nums) {
    return newArr;
}

// console.log(returnSums(nums))
// return returnSums(nums)

//////////////////////////////////////

  /**
   * Using forEach return a number that is the total sum of all numbers in the array of objects.
   * The key for each object will be n
   * @param objs => [{n:1}]
   */
  // function returnTotal(objs) {

  // }

//solution 

const objs = [{n:1}]

let total = 0;
objs.forEach(obj => {
  total += obj.n;
})

 function returnTotal(objs) {
    return total
  }

// console.log(returnTotal(objs))
// return returnTotal(objs)

///////////////////////////////////////////////
  /**
   * @param decimals => [2.30, 2.40, 32.99]
   * Using .map, return an array of decimals formatted as dollars.
   * EX: {
   * input: [12.34, 9.99],
   * output: ['$12.34', '$9.99']
   * }
   * Hint: Not all decimals have two places, make sure to return each decimal with the proper decimal places. .toFixed may be useful :)
   */

  // function printMoney(decimals) {

  // }

// solution

const decimals = [2.30, 2.40, 32.99];

let moneyArray = [];

const addDollarSign = decimals.map((decimal) => { 
  let newMoney = '$' + decimal.toFixed(2);
  moneyArray.push(newMoney);
})

function printMoney(decimals) {
    return moneyArray
}

// console.log(printMoney(decimals))
// return printMoney(decimals)

///////////////////////////////////////////////  

  /**
   * @param values => [{name: 'Joe', happy:false}]
   * Using .filter, return an array of objects where happy equals true
   */
  // function returnAllTrueValues(value) {

  // }

  // solution

  values = [{name: 'Joe', happy:false}]

   function returnAllTrueValues(values) {
    return values.filter(value => {
      if (value.happy) {
        return value
      }
    })
  }


///////////////////////////////////////////////

 /**
   * @param nums => [1,2,3,4]
   * Using .reduce, return the total sum of all numbers.
   * Each number should have 2 added to it.
   */
  //   3
  //   4 => 7

  // function addTwo(nums) {

  // }  

// solution

  nums = [1,2,3,4]

  const sum = nums.reduce((accumulator, value) => {
    return (accumulator += 2) + value
  }, 0)

  function addTwo(nums) {
    return sum
  }  

  // console.log(addTwo(nums))
  // return addTwo(nums)

///////////////////////////////////////////////

  /**
   * @param strings => ['g', 'f', 'z']
   * Using .reduce, return a new string containing each string from the strings array.
   */
  //  function joinStrings(strings) {

  // }

// solution

let strings = ['g', 'f', 'z']

const newStrings = strings.reduce((accumulator, value) => {
  return accumulator + value
});

 function joinStrings(strings) {
    return newStrings
  }

// // console.log(joinStrings(strings));
// return joinStrings(strings);



///////////////////////////////////////////////

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
