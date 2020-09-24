/* 387. First Unique Character in a String

Share
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2. */



var firstUniqChar_02 = function(s) {
    for(i=0; i<s.length; i++)
        if(s.indexOf(s[i])===s.lastIndexOf(s[i])) return i
    return -1
};