/* 274. H-Index

According to the definition of h-index on Wikipedia: "A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each."

Example:

Input: citations = [3,0,6,1,5]
Output: 3
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had 
             received 3, 0, 6, 1, 5 citations respectively. 
             Since the researcher has 3 papers with at least 3 citations each and the remaining 
             two with no more than 3 citations each, her h-index is 3. */


/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {

    if (citations.length == 0) return 0;            //  길이가 0일때 무조건 0
    else if (citations.length == 1) {               //  [1] 1개일 때 예외케이스
        if (citations[0] <= 0) return 0;
        else return 1;
    } else {

        citations.sort((a,b) => b - a);
        for (var i = 0; i < citations.length; i++) {
            if (citations[i] <= i) {
                    return i;
            }
        }
         return citations.length;
    }

}