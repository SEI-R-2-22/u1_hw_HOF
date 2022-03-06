// You must RETURN your result in each function!
let genNums = [1,2,3,4]
function printNums(nums) {
  
    let  newArray = [] ;
    nums.forEach((elementNums) => {
        newArray.push(elementNums)


    }) 
/**
   *  Using .forEach, add each number in the nums array to a new array.
   * @param nums => [1,2,3,4]
   */
//push 1,2,3,4(elements) from nums array into new array by using .forEach
//create new array
return newArray;
}
printNums(genNums)
//////////
const nums1 = [1,2,3,4,5]
function returnSums(nums1) {
  /**
   * Using forEach, push the sum of n plus the index
   * to a new array and return the new array
   * @param nums => [1,2,3,4,5]
   */
      let nums2 = []
      nums1.forEach ((n, i)=>{
          nums2.push (n+i )


      })
        // console.log (nums2);
        return nums2; 
}
 returnSums(nums1)



/////////////////////////////////////
////NUMBER 3//////
// let obj1= {
//   n:1
// }
// let obj2 = {
//   n:2

// }
// let obj3 ={
//   n:3
// }
// let objArr= [obj1, obj2,obj3]


function returnTotal(objs) {
    let objArr = []
    objs.forEach ((allObjects) => {
      objArr.push(allObjects.n)


    } )
    return objArr.reduce( (newObjects, ob) => {
    return newObjects + ob
    } )
}
  /**
   * Using forEach return a number that is the total sum of all numbers in the array of objects.
   * The key for each object will be n
   * @param objs => [{n:1}]
// use for each
//---pull info from array
// return a number = sum of all numbers in objects array



//////////////////////////////////////////////////
/////NUMBER 4/////
/////////
//
  //  * Hint: Not all decimals have two places, make sure to return each decimal with the proper decimal places. .toFixed may be useful :)
  //  */
// 


let oldMoney = [2.3088, 2.4065, 32.9978]
function printMoney(decimals) { 
  let moneyDecimals = decimals.map((money) => {
      return "$" + money.toFixed(2)
    
  })
  return moneyDecimals
}










//pull info from array given using .map
//format array as map
// return array from decimals to dollars $(from number to string because)
//return decimals in same place



/////////////////
////number 5///////
////////
  /**
   * @param values => [{name: 'Joe', happy:false}]
   * Using .filter, return an array of objects where happy equals true
   */
  
    // printMoney(theMoney)

    let values = [{name: 'Joe', happy:false}] [{name: 'michelle', happy: true}]
   function returnAllTrueValues(values) {
    let truth = values.filter((honest) => {
      if(honesty.happy === true) {
        return honesty;
    }
      return truth
    }
  }


//use .filter to return an array with true if name is happy
//true is a boolean
///////////////////////////
///6///////////////////

let nums = [1,2,3,4];
function addTwo(nums) {
  let nums2 = nums.map((newValue) => {
    return newValue + 2
  })
  let  sum = nums2.reduce((accumulator, value) => {
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
////////7////////////

let striiiings = ['g', 'f', 'z']
function joinStrings(strings) {
  /**
   * @param strings => ['g', 'f', 'z']
   * Using .reduce, return a new string containing each string from the strings array.
   */
 let newValue = strings.reduce(( accumulator, newValue) => {
  return accumulator + newValue 
  })
  return newValue 







}



//Bonus 8///////
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
