/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let fast = 0
    let slow = 0
    while(fast < nums.length){
        if(nums[fast] === val && nums[slow] === val){
            fast++;
        }else if(nums[fast] !== val && nums[slow] === val){
            let temp = nums[fast]
            nums[fast] = nums[slow]
            nums[slow] = temp
            slow++;
        }else{
            fast++;
            slow++;
        }               
    }
    return slow
};