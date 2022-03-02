// You must RETURN your result in each function!

function printNums(nums) {
  /**
   *  Using .forEach, add each number in the nums array to a new array.
   * @param nums => [1,2,3,4]
   */
  let newArr = nums;
  const result = nums.forEach((num) => {
    newArr.push(num);
  });
  return newArr;
}

function returnSums(nums) {
  /**
   * Using forEach, push the sum of n plus the index
   * to a new array and return the new array
   * @param nums => [1,2,3,4,5]
   */
  let newArr = [];
  const result = nums.forEach((num, index) => {
    newArr.push(num + index);
  });
  return newArr;
}

function returnTotal(objs) {
  /**
   * Using forEach return a number that is the total sum of all numbers in the array of objects.
   * The key for each object will be n
   * @param objs => [{n:1}]
   */
  let total = 0;
  const sumOfnums = objs.forEach((obj) => {
    total += obj.n;
  });
  return total;
  

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
  const addSign = decimals.map(sign => '$' + sign.toFixed(2));
  return addSign;

}

function returnAllTrueValues(values) {
  /**
   * @param values => [{name: 'Joe', happy:false}]
   * Using .filter, return an array of objects where happy equals true
   */
  const isHappy = values.filter((value) => {
    if (value.happy === true) {
      return value;
    }
  });
  return isHappy;

}

function addTwo(nums) {
  /**
   * @param nums => [1,2,3,4]
   * Using .reduce, return the total sum of all numbers.
   * Each number should have 2 added to it.
   */
  //   3
  //   4 => 7

  let totalSum = (nums).map(num => num + 2).reduce((accumulator,value) => {
    return accumulator + value;
  });
  return totalSum;
}

function joinStrings(strings) {
  /**
   * @param strings => ['g', 'f', 'z']
   * Using .reduce, return a new string containing each string from the strings array.
   */
  let completeStr = (strings).reduce((accumulator, value) => {
    return accumulator + value;
  });
  return completeStr;
  
}

//Bonus
function sortObjectsByValue(objs) {
  /**
   * @param objs => [{value: 1}, {value:2}, {value:23}]
   * Using .sort, sort the array of objects by the value key in ascending order
   * .sort documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   */
  objs.sort((firstNum, secondNum) => firstNum.value - secondNum.value);
  return objs;

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
