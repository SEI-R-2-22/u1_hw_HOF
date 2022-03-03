// You must RETURN your result in each function!

function printNums(nums) {
  /**
   *  Using .forEach, add each number in the nums array to a new array.
   * @param nums => [1,2,3,4]
   */
    newArray =[]
    nums.forEach(element => {
    newArray.push(element)
  });
  return newArray
}

function returnSums(nums) {
  /**
   * Using forEach, push the sum of n plus the index
   * to a new array and return the new array
   * @param nums => [1,2,3,4,5]
   */
    newArray = []
    nums.forEach((element, i) => {
        let newNum = element + i;
        newArray.push(newNum);
  });
  return newArray
}

function returnTotal(objs) { 
  /**
   * Using forEach return a number that is the total sum of all numbers in the array of objects.
   * The key for each object will be n
   * @param objs => [{n:1}]
   */
   const sumall = objs.map(item => item.n).reduce((a, b) => a + b, 0);
   return sumall
   
  //  const totals = objs.forEach((item) => {
  //   let sum = 0; 
  //   sum += item.n;
  //   return sum})
  //   return totals
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
   const formatted = decimals.map(a => a.toFixed(2)).map(x => `$${x}`)
   return formatted
   // toFixed not working
}

function returnAllTrueValues(values) {
  /**
   * @param values => [{name: 'Joe', happy:false}]
   * Using .filter, return an array of objects where happy equals true
   */
   const result = values.filter(mood => mood.happy === true);
   return result
}

function addTwo(nums) {
  /**
   * @param nums => [1,2,3,4]
   * Using .reduce, return the total sum of all numbers.
   * Each number should have 2 added to it.
   */
  //   3
  //   4 => 7
  const reduction = nums.reduce((a, b) => {
   return (a + 2) + b
  }, 0)
  return reduction
}

function joinStrings(strings) {
  /**
   * @param strings => ['g', 'f', 'z']
   * Using .reduce, return a new string containing each string from the strings array.
   */
  const jumble = strings.reduce((a, b) => {
    return a + b
  }) 
  return jumble
}

//Bonus
function sortObjectsByValue(objs) {
  /**
   * @param objs => [{value: 1}, {value:2}, {value:23}]
   * Using .sort, sort the array of objects by the value key in ascending order
   * .sort documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   */
   const sorted = objs.sort((a, b) => {
    return a.value - b.value;
    });
    return sorted
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
