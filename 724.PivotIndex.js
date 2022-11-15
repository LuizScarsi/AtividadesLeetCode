var nums = [1, 7, 3, 6, 5, 6]
let leftSum = 0
let rightSum = nums.reduce((a,b)=>a+b) //soma todos os elementos da array
for (i=0; i<nums.length; i++){
    rightSum -= nums[i]
    if (leftSum === rightSum){
        console.log(i)
    }
    leftSum += nums[i]
}
console.log(-1)