/* 324. Wiggle Sort II

Share
Given an unsorted array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

Example 1:
Input: nums = [1, 5, 1, 1, 6, 4]
Output: One possible answer is [1, 4, 1, 5, 1, 6].

Example 2:
Input: nums = [1, 3, 2, 2, 3, 1]
Output: One possible answer is [2, 3, 1, 3, 1, 2].
Note:
You may assume all input has valid answer.

Follow Up:
Can you do it in O(n) time and/or in-place with O(1) extra space? */


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var wiggleSort = function(nums) {
    nums.sort((a, b) => b - a)
    const b_array = nums.slice(0, nums.length / 2);
    const s_array = nums.slice(nums.length / 2, nums.length);

    for (let i = 0; i < nums.length; i++) {
      if (i % 2 === 0) {
        nums[i] = s_array[i / 2]
      } else {
        nums[i] = b_array[parseInt(i / 2)]
      }
    }
}
wiggleSort([1,5,1,1,6,4]);
// wiggleSort([1, 3, 2, 2, 3, 1]);