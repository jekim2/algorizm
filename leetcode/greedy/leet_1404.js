/* Given a number s in their binary representation. Return the number of steps to reduce it to 1 under the following rules:

If the current number is even, you have to divide it by 2.

If the current number is odd, you have to add 1 to it.

It's guaranteed that you can always reach to one for all testcases.


이진 표현에 숫자 s가 주어집니다. 다음 규칙에 따라 단계 수를 1로 줄이십시오.

현재 숫자가 짝수이면 2로 나누어야합니다.

현재 숫자가 홀수이면 1을 더해야합니다.

모든 테스트 케이스에 대해 항상 하나에 도달 할 수 있습니다.


(( example ))
Example 1:
Input: s = "1101"
Output: 6
Explanation: "1101" corressponds to number 13 in their decimal representation.
Step 1) 13 is odd, add 1 and obtain 14.
Step 2) 14 is even, divide by 2 and obtain 7.
Step 3) 7 is odd, add 1 and obtain 8.
Step 4) 8 is even, divide by 2 and obtain 4.
Step 5) 4 is even, divide by 2 and obtain 2.
Step 6) 2 is even, divide by 2 and obtain 1.
Example 2:

Input: s = "10"
Output: 1
Explanation: "10" corressponds to number 2 in their decimal representation.
Step 1) 2 is even, divide by 2 and obtain 1.  
Example 3:

Input: s = "1"
Output: 0
 
  */

  /**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    let i = 0, n = BigInt("0b"+s);

    console.log('n >>> ' , n);
    
    while(n!=1n){
        n = n%2n==1n ? n+1n : n/2n;
        i++;
    }
    console.log('i >> ' , i);
    return i;
};
// var numSteps = function(s) {
//     if(s == "1") return 0;

//     s =  BigInt(parseInt(s, 2));

//     console.log('s >> ' , s);



//     let count = 0;

//     let helper = (str) => {

//         console.log('count >> ' , str , count);

//         if(str == 1) return str;

//         str.divide(2) == 0 ? str = str.divide(2) : str = str.add(1);

//         count ++;

//         helper(str);

//         return str;
//     };

//     helper(s);

//     console.log('count result >> ' , count);

//    return count;

// };

numSteps("1111011110000011100000110001011011110010111001010111110001");

//1111011110000011100000110001011011110010111001010111110001