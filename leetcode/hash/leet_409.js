/* 409. Longest Palindrome

Share
Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:

Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7. */

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var longestPalindrome = function(s) {
//     let map = {};
//     let temp_array = [];
//     for (const str of s) {
//         map[str] ? map[str] ++ : map[str] = 1;
//     }
//     console.log('map >> ' , map);
    
// }
var longestPalindrome = function(s) {
    let ans = 0;
    let map = {};
    
    for (let char of s) {
      map[char] ? map[char] += 1 : map[char] = 1;
      if (map[char] % 2 == 0) ans += 2;
    }

    console.log('keys[char] >> ' , map );
    return s.length > ans ? ans + 1 : ans;
  };


longestPalindrome("abccccdd");