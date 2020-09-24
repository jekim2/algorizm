// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxSubArray = function(nums) {
//     let result = 0;

//     while(nums.length == 0) {
//         if(result > nums_sum) result = nums_sum;
//         let nums_sum = 0;
//         for(var i =0; i<nums.length; i++) {
//             if(i == 3) {
//                 nums.shift();
//                 break;
//             }
//             nums_sum += nums[i];
//         }


//     }
//     return result;
// };

// maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);

function maxSubArray(A) {
    var prev = 0;
    var max = -Infinity;
    console.log('max >> ' , max);

    for (var i = 0; i < A.length; i++) {
      prev = Math.max(prev + A[i], A[i]);
      max = Math.max(max, prev);

      console.log('prev, A[i], max : ' , prev, A[i], max);
    }
    console.log('max >> ' , max);
    return max;
  }
maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
// maxSubArray([-2,-2,-2]);