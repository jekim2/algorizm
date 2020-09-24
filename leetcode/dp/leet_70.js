/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    console.log('n >> ' , n);
    // if(n == 0) return 0;
    // if(n == 1) return 1;
    // if(n == 2) return 2;

    if(n ==0) return 0;
    else if(n == 1) return 1;
    else {
        return  climbStairs(n-1) + n;
    }
};

climbStairs(4);




var test = 



























