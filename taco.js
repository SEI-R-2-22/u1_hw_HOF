
function addTwo(nums) {
  let sum = nums.reduce((accumulator, value) => {
    return accumulator + value + 2
  })
  return sum
}
addTwo([1, 2, 3])
console.log(addTwo([1, 2, 3]))