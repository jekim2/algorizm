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
var findLongestWord = function(s, d) {
    var result_array = [];
    d.map((x) => {
        var temp_strirng = s;
        var temp_array = x.split("");
        for (var i =0; i< temp_array.length; i++) {
            // var array =  temp_strirng.split("");
            // if (temp_strirng.indexOf(temp_array[i]) > -1) {
            //     temp_strirng.split("").splice(temp_strirng.indexOf(temp_array[i]), 1)
            //     console.log('temp_array>> ' , temp_strirng.split("").splice(temp_strirng.indexOf(temp_array[i]), 1));
            //     console.log('temp_array slice>> ' , temp_strirng)
            // }
        }
    });
    // for (var i =0; i< d.length; i++) {
    //     var temp_string = s;
    //     if (temp_string.indexOf(d[i]))
    //      console.log('d ?>> ' ,d [i]);
    // }
};

findLongestWord("abpcplea", ["ale","apple","monkey","plea"] )