/* 204. Count Primes

Add to List
Share
Count the number of prime numbers less than a non-negative number, n.
Example:
Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7. */
// /**
//  * @param {number} n
//  * @return {number}
//  */
// var countPrimes = function(n) {
//     var array = [];
//     if (n == 1) return 0;
//     else {
//         while(n !== 1) {
//             let flag = true;
//             if (n == 2) array.push(n);
//             else {
              
//                 for (var i = 0; i< Math.floor(n/2); i++ ) {
//                     if (n % i == 0){
//                         flag = false;
//                         break;  
//                     } 
//                 }
                
                
//             }
//              if (flag) array.push(n);   
//             n --;
//         }
//     }
    
//     return array.length;
    
// };

var countPrimes_02 = function(n) {
    let hash = new Array(n).fill(true);
    
    hash[0] = false; 
    hash[1] = false;
    console.log('hash >> ' , hash);

    for (let i=2;i*i<n;i++) {
        if (hash[i]) {
            for(let j=i*i;j<n;j+=i){ // p*(p+1)...
                hash[j] = false;
            }
        }
    }
    return hash.filter((val)=>val).length;
};

var countPrimes_03 = function(n) {
    if (n == 0 || n == 1) return 0
    
    let count = 0
    for (let i = 2; i < n; i++) if(isPrime(i)) count++
    return count
};

const isPrime = n => {
    if (n == 2) return true
    for (let i = 2; i <= Math.sqrt(n); i++) 
        if (n % i == 0) return false
    
    return true
};

countPrimes_02(10);