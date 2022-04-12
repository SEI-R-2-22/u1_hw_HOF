// You must RETURN your result in each function!

function printNums(nums) {
  let newNum = []
  nums.forEach((value) => {
    newNum.push(value)
  })
  return newNum
}

function returnSums(nums) {
  let newArr = []
  nums.map((n, index) => {
    return n + index
  }).forEach((value) => {
    newArr.push(value)
  })
  return newArr
}

function returnTotal(objects) {
  let newObjects = []
  objects.forEach((num) => {
    newObjects.push(num.n)
  })
  return newObjects.reduce((number, value) => {
    return number + value
  })
}

function printMoney(decimals) {
  let newMoney = []
  decimals.forEach((elements) => {
    newMoney.push(elements.toFixed(2))
  })

  return newMoney.map((value) => {
    return '$' + value
  })
}

function returnAllTrueValues(values) {
  let arr = values.filter((trueVals) => {
    if (trueVals.happy === true) {
      return trueVals
    }
  })
  return arr
}

function addTwo(nums) {
  return nums.map((value) => {
    return value + 2
  }).reduce((first, second) => {
    return first + second
  })
}

function joinStrings(strings) {
  return strings.reduce((first, second) => {
    return first + second
  })
}

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
