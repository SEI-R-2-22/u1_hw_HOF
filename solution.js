// You must RETURN your result in each function!

let nums = [1,2,3,4]


function printNums(nums) {

  let result = []
  
  
  nums.forEach((ex) => {

    
    result.push(ex);
    
  })

  return result


  /**
   *  Using .forEach, add each number in the nums array to a new array.
   * @param nums => [1,2,3,4]
   */
}
console.log("printNums: " + printNums(nums))

let nums1 = [1,2,3,4,5]

function returnSums(nums) {

  let result = [];

  nums.forEach((ex, indx) => {

    let sum = ex + indx;
    result.push(sum);

  })
  return result
  /**
   * Using forEach, push the sum of n plus the index
   * to a new array and return the new array
   * @param nums => [1,2,3,4,5]
   */
}
console.log("returnSums: " + returnSums(nums1))


let obj1 = {

  n:1

};
let obj2 = {

  n:2

};
let obj3 = {

  n:3

};

objArr = [{n:1}, {n:1}, {n:1}];


function returnTotal(objs) {

  let numArr1 = [];

  objs.forEach((ex) => {

    numArr1.push(ex.n);


  })

  let result = numArr1.reduce((accum, val) => {

    return accum + val;

  })

return result
  /**
   * Using forEach return a number that is the total sum of all numbers in the array of objects.
   * The key for each object will be n
   * @param objs => [{n:1}]
   */
}
console.log("returnTotal: " + returnTotal(objArr));


let moneyArr = [2.30, 2.40, 32.99]

function printMoney(decimals) {



  let result = decimals.map((ex) => {

    let morph = ex.toFixed(2);
    let morph1 = "$" + morph;
    return morph1;


  })

  return result;


  /**
   * @param decimals => [2.30, 2.40, 32.99]
   * Using .map, return an array of decimals formatted as dollars.
   * EX: {
   * input: [12.34, 9.99],
   * output: ['$12.34', '$9.99']
   * }
   * Hint: Not all decimals have two places, make sure to return each decimal with the proper decimal places. .toFixed may be useful :)
   */
}

console.log("printMoney: " + printMoney(moneyArr));


let testNamesArr = [{name: 'Joe', happy:false}, {name: "Moe", happy:true}]



function returnAllTrueValues(values) {

  let result = values.filter((ex) => {
    
    if (ex.happy === true) {
      
      return ex;

    }else {

    }


  })

return result;

  /**
   * @param values => [{name: 'Joe', happy:false}]
   * Using .filter, return an array of objects where happy equals true
   */
}

console.log("returnAllTrueValues: " + returnAllTrueValues(testNamesArr))


let testStrings = ["t", "e", "s", "t"]


function addTwo(nums) {


  let added = nums.map((ex) => {

    return ex + 2;

  })


  let result = added.reduce((accum, val) => {

    return accum + val;

  })
return result
  /**
   * @param nums => [1,2,3,4]
   * Using .reduce, return the total sum of all numbers.
   * Each number should have 2 added to it.
   */
  //   3
  //   4 => 7
}

console.log("addTwo: " + addTwo(nums))

function joinStrings(strings) {

let result = strings.reduce((accum, val) => {

  return accum + val;

})

return result


  /**
   * @param strings => ['g', 'f', 'z']
   * Using .reduce, return a new string containing each string from the strings array.
   */
}

console.log("joinStrings: " + joinStrings(testStrings))


//Bonus

// let valArr = [{value: 1}, {value:23}, {value:2}]

// function sortObjectsByValue(objs) {



//   let newArr = objs.map((ex) => {

//     return ex.value;

//   })

//   newArr.sort((a, b)=> a-b );

//   objs.forEach((why, index) = {

//       why.value = newArr[index];
    

//   })

//   return newArr;


  /**
   * @param objs => [{value: 1}, {value:2}, {value:23}]
   * Using .sort, sort the array of objects by the value key in ascending order
   * .sort documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   */
// }

// console.log("objs: " + sortObjectsByValue(valArr));

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
