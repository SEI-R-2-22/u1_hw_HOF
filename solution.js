// You must RETURN your result in each function!

function printNums(nums) {
  /**
   *  Using .forEach, add each number in the nums array to a new array.
   * @param nums => [1,2,3,4]
   */
  let newArray = [];
  nums.forEach(e => newArray.push(e));
  return newArray; 
} 

/////////////////////

function returnSums(nums) {
  /**
   * Using forEach, push the sum of n plus the index
   * to a new array and return the new array
   * @param nums => [1,2,3,4,5] 
   */               // => [1+0, 2+1, 3+2, 4+3, 5+4] = [1,3,5,7,9]
  let newArray = [];
  nums.forEach( (e,i) => newArray.push(parseInt(e) + i));
  return newArray;
}

//////////////////////

function returnTotal(objs) {
  /**
   * Using forEach return a number that is the total sum of all numbers in the array of objects.
   * The key for each object will be n
   * @param objs => [{n:1}]
   */
  let c = 0;
  objs.forEach(e => c += e.n);
  return c;
}

///////////////////

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
  return decimals.map(e => `\$${parseFloat(e).toFixed(2)}`);
}

////////////////////

function returnAllTrueValues(values) {
  /**
   * @param values => [{name: 'Joe', happy:false}]
   * Using .filter, return an array of objects where happy equals true
   */
  return values.filter(e => e.happy == true);
}

///////////////////////////

function addTwo(nums) {
  /**
   * @param nums => [1,2,3,4]
   * Using .reduce, return the total sum of all numbers.
   * Each number should have 2 added to it.
   */
  //   3
  //   4 => 7
  return nums.reduce( (prev, current) => (prev + (2+current)), 0);
}

/////////////////////

function joinStrings(strings) {
  /**
   * @param strings => ['g', 'f', 'z']
   * Using .reduce, return a new string containing each string from the strings array.
   */
  return strings.reduce( (prev, cur) => `${prev}${cur}`);
}




//Bonus
function sortObjectsByValue(objs) {
  /**
   * @param objs => [{value: 1}, {value:2}, {value:23}]
   * Using .sort, sort the array of objects by the value key in ascending order
   * .sort documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   */
  return objs.sort((a,b) => a.value - b.value);
}

  // I spend some time reading through the resource pages on both Mozilla and W3Schools. After ripping my hair out trying to understand it on Mozilla, I read the W3Schools explanation and feel MUCH better. 

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
