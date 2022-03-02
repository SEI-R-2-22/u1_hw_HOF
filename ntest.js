let par = [1,2,3,4]

function returnSums(nums) {
  /**
   * Using forEach return a number that is the total sum of all numbers in the array of objects.
   * The key for each object will be n
   * @param objs => [{n:1}]// 18
   */
    return nums.reduce((str,b) => str + b + 2,0)
  
  }

  console.log( returnSums(par));
