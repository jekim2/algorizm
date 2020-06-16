/* 350. Intersection of Two Arrays II

Share
Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Note:

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once? */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1.sort((a,b) => a - b);
    nums2.sort((a,b) => a - b);
    var result = [];

    if (nums1.length < nums2.length) {
        var temp = nums1;
        nums1 = nums2;
        nums2 = temp;
    }
    console.log(nums1);
    console.log(nums2);

    for(var i = 0; i< nums1.length; i++) {
        for (var j = 0; j< nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                result.push(nums2[j])
                nums2.splice(j, 1);
                break;
            }
        }
    }
    console.log('result >> ', result);
    return result;
};


intersect( [4,9,5], [9,4,9,8,4]);