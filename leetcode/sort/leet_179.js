/* 179. Largest Number

Given a list of non negative integers, arrange them such that they form the largest number.

Example 1:
Input: [10,2]
Output: "210"

Example 2:
Input: [3,30,34,5,9]
Output: "9534330"

Note: The result may be very large, so you need to return a string instead of an integer. */

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {

    // console.log('nums >> ' , nums );

    nums.sort((a, b) => {
        let prev = String(a).split("");
        let next = String(b).split("");
        if (Number(prev[0]) < Number(next[0])) return 1;
        else if (Number(prev[0]) > Number(next[0])) return -1;
        // 첫글자가 같은 경우
        else {
            const j_prev = prev.join("");
            const j_next = next.join("");

            if (Number(j_prev + j_next) < Number(j_next+ j_prev )){
                return 1;
            } else if (Number(j_prev + j_next) > Number(j_next+ j_prev )){ 
                return -1;
            } 


            return 0;
        }
    });
    console.log('nums result>> ' , nums.join('') );
    
    if (Number(nums.join('')) === 0) return "0";
    else return nums.join('');
};

// largestNumber([0,0]);
largestNumber([999999998,999999997,999999999]);
// largestNumber([121,12]);
