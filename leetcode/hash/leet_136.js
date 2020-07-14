/* 136. Single Number

Share
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:
Input: [2,2,1]
Output: 1

Example 2:
Input: [4,1,2,1,2]
Output: 4
 */
/**
 * @param {string} s
 * @return {number}
 */
var singleNumber = function(s) {
    var obj = {};
    s.map((x) => {
        obj.hasOwnProperty(x) ? obj[x] += 1 : obj[x] = 1;
    });
    console.log('obj >> ' , obj);

    for (let key in obj) {
        if (obj[key] == 1) return key;
        console.log('key >> ' , key);
    }

};


singleNumber([4,1,2,1,2]);