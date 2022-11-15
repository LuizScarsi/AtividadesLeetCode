var nums = [1, 2, 3, 4]
var numsSum = (nums) => {
    let sum = 0
    let sumArr = []
    for (let num of nums){
        sum+=num
        sumArr.push(sum)
    }
    return sumArr
}
console.log(`A array original é = ${nums}`)
console.log(`A array depois de ser aplicada na função de soma é = ${numsSum(nums)}`)