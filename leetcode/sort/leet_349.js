/* 349. Intersection of Two Arrays

Share
Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Note:

Each element in the result must be unique.
The result can be in any order. */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
};

var intersection2 = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    console.log('set1 >> ' , set1);
    console.log('set2 >> ' , set2);
    console.log('return >> ' ,  [...set1].filter(n => set2.has(n)));
    return [set1].filter(n => set2.has(n))
};

intersection2([1,2,2,1], [2,2]);