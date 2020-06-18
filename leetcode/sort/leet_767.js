/* 767. Reorganize String

Share
Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.

If possible, output any possible result.  If not possible, return the empty string.

Example 1:

Input: S = "aab"
Output: "aba"
Example 2:

Input: S = "aaab"
Output: "" */

/**
 * @param {string} S
 * @return {string}
 */
// var reorganizeString = function(S) {
//     var prev_array = S.split("").slice(0, Math.floor(S.length/2)).sort((a,b) => { if (a < b) return -1; else if (a > b) return 1; else return 0;});
//     var after_Array = S.split("").slice(Math.floor(S.length/2), S.length).sort((a,b) => { if (a < b) return 1; else if (a > b) return -1; else return 0;});

//     var result = [];

//     console.log(prev_array);
//     console.log(after_Array);

//     result.push(prev_array[0]);

// //     for (var i =0; i< result.length; i++) {
// //         result.push(prev_array[i]);
// //         for (var j =0; j< after_Array.length; i++) {
// //             if (prev_array[i] !== after_Array[j]) {
// //                 result.push(after_Array[j]);
// //                 break;
// //             }
// //         }
// //     // for (var i =0; i< S.length; i++) {
// //     //     result.push(prev_array[i]);
// //     //     result.push(after_Array[i]);
// //     // }
// // //   s.split("").map((x)=> {

// // //   });
// //     };
// }

var reorganizeString = function(S) {
    if (S.length  < 1) return "";
    var obj = {};
    for(var char of S){
        obj.hasOwnProperty(char) ?  obj[char] += 1 : obj[char] = 1;
    }
    console.log('obj >> ', obj);
    var temp_array = [];
    temp_array = Object.entries(obj).sort((a,b) => b[1] - a[1]);
    console.log('temp_array >> ', temp_array);

    var idx = 0;
    // var prevLetter;
    var result = new Array(S.length);
    // var result = [];
    for (var i =0 ; i < temp_array.length ; i++) {
        var count = temp_array[i][1];

        // 처음에 문자는 그냥 넣기
        if (i !== 0) {
            idx = result.findIndex(e => e === undefined);
        }
        console.log('idx >> ' , idx);

        // if (!idx) {
        //     console.log('result >> ' , result.join(""));
        //     return '';
        // }

        while(count > 0) {
            // prevLetter = temp_array[i][0];
            result[idx] =  temp_array[i][0];
            idx += 2;
            count --;
        }

    }
    console.log('result >> ' , result);
    console.log('result >> ' , result.join(""));

    return result.join("");

}

// reorganizeString("ab");
reorganizeString("aa");


                // idx = list.findIndex((x) => {
                //     if (x !== prevLetter) {
                //         console.log('x >> ' , idx);
                //         console.log('prevLetter >> ' , prevLetter);
                //         return x !== prevLetter;
                //     }
                //     // x !== prevLetter}
                // });

        // if (i !== 0) {
        //     idx = 0;
        // } 
        // else {

        // }

        // if (result.includes(undefined) || i == 0) {
        //     idx = list.findIndex((x) => {
        //         if (x !== prevLetter) {
        //             console.log('x >> ' , idx);
        //             console.log('prevLetter >> ' , prevLetter);
        //             return x !== prevLetter;
        //         }
        //         // x !== prevLetter}
        //     });
        // }
    //         // console.log(result.indexOf(undefined));
    //         idx = list.findIndex((x) => x !== prevLetter );
    //     } else {
    //         idx = result.length -1;
    //     }

       
    //     console.log('result >> ' , result);
  // build an array of records for each char in S { char: 'A', count: 9 }
//   const map = S.split('').reduce((map, char) => {
//     if (map[char]) {
//       map[char].count += 1;
//     } else {
//       map[char] = { char, count: 1 };
//     }
//     return map;
//   }, {});
  
//   // sort records so most common chars are first
 
//   const list = Object.values(map);
//   list.sort((a, b) => b.count - a.count);
   
//   // build string using most commom char that does not match previous char
  
//   // BAAACC  A3, C2, B1  -> ACACAB
  
//   let s = '';
//   let previousChar;
//   for(let i = 0; i < S.length; i += 1) {
//     // find char with highest count from array that does not match previous
//     const index = list.findIndex(record => record.count && record.char !== previousChar);
//     const record = list[index];
    
//     // if no possible char then permutation does not exist
//     if (!record) {
//       return '';
//     }
    
//     // take char from record
//     s += record.char;
//     record.count -= 1;
    
//     // update previous
//     previousChar = record.char;
    
//     // swap record if smaller than next record if needed
//     if (index < list.length - 1 && record.count < list[index + 1].count) {
//       [ list[index], list[index + 1] ] = [ list[index + 1], list[index] ];
//     }
//   }
  
//   return s;


// var reorganizeString1 = function(S) {
//     // build an array of records for each char in S { char: 'A', count: 9 }
//     const map = S.split('').reduce((map, char) => {
//         if (map[char]) {
//           map[char].count += 1;
//         } else {
//           map[char] = { char, count: 1 };
//         }
//         return map;
//       }, {});
      
//       // sort records so most common chars are first
     
//       const list = Object.values(map);
//       list.sort((a, b) => b.count - a.count);
//       console.log('list >> ', list);
//       // build string using most commom char that does not match previous char
      
//       // BAAACC  A3, C2, B1  -> ACACAB
      
//       let s = '';
//       let previousChar;
//       for(let i = 0; i < S.length; i += 1) {
//         // find char with highest count from array that does not match previous
//         const index = list.findIndex(record => record.count && record.char !== previousChar);
//         console.log('idx >> ' , index);
//         const record = list[index];
        
//         // if no possible char then permutation does not exist
//         if (!record) {
//           return '';
//         }
        
//         // take char from record
//         s += record.char;
//         record.count -= 1;
        
//         // update previous
//         previousChar = record.char;
        
//         // swap record if smaller than next record if needed
//         if (index < list.length - 1 && record.count < list[index + 1].count) {
//           [ list[index], list[index + 1] ] = [ list[index + 1], list[index] ];
//         }
//       }
      
//       return s;
// };
