/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    if(nums.length === 1) return 0
       
    const totalSum = nums.reduce((acc,cur)=>acc+cur)
    let leftSum = 0
    
    for(i=0; i<nums.length;i++){
        if(leftSum === totalSum-leftSum-nums[i]){
            return i
        }
        leftSum += nums[i]
    }
    return -1
};