/* 524. Longest Word in Dictionary through Deleting

Share
Given a string and a string dictionary, find the longest string in the dictionary that can be formed by deleting some characters of the given string.
If there are more than one possible results, return the longest word with the smallest lexicographical order. If there is no possible result, return the empty string.

Example 1:
    Input:
    s = "abpcplea", d = ["ale","apple","monkey","plea"]
    Output: "apple"

Example 2:
    Input:s = "abpcplea", d = ["a","b","c"]
    Output:"a"
*/

/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
// var findLongestWord = function(s, d) {
//     var result_array = [];
//     d.map((x, idx) => {
//         var temp_string = s;
//         var temp_array = x.split("");
//         var s_array =  temp_string.split("");
//         var count = 0;
//         for (var i =0; i< temp_array.length; i++) {
//             for (var j =0; j< s_array.length; j++) {
//                 if (s_array[j] === temp_array[i]) {
//                     console.log('tmep_array >> ' , temp_array[i]);
//                     console.log('array >> ', s_array[j]);
//                     count ++;
//                     temp_array.splice(i, 1);
//                     console.log('count >> ', count);
//                 }
//             }
//             result_array[idx] =  {'count' : count , 'string' : x }
//         }
//     });
//     result_array.sort((a,b) => {
//         if (a["count"] <  b["count"]) return 1;
//         else if (a["count"] >  b["count"]) return -1;
//         else return 0;
//     })
//     console.log('result_array >> ', result_array);
//     console.log('result_array >> ', result_array[0]["string"]);
//     return result_array[0]["string"];
// };
// // findLongestWord("abpcplea", ["a","b","c"]);
// findLongestWord("aewfafwafjlwajflwajflwafj", ["apple","ewaf","awefawfwaf","awef","awefe","ewafeffewafewf"]);
// findLongestWord("abpcplea", ["ale","apple","monkey","plea"] )

function findLongestWord2(s, d) {
    d.sort((a, b) => {
        // 긴 문자열 부터 없애야 많이 줄일 수 있으므로
      if (a.length !== b.length) {
        return b.length - a.length;
      }
      return a.localeCompare(b);    // 문자 정렬
    });
    console.log('d >>> ' ,d);
    for (let word of d) {
      let index = -1;
      for (let c of word) {
        //   console.log('c >> ' , c);
        index = s.indexOf(c);
        if (index < 0) break;
      }
      if (index >= 0) {console.log(index , word);  return word;}
    }
    return '';
}

findLongestWord2("aewfafwafjlwajflwajflwafj", ["apple","ewaf","awefawfwaf","awef","awefe","ewafeffewafewf"]);