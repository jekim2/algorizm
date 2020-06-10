// // 조이스틱으로 알파벳 이름을 완성하세요. 맨 처음엔 A로만 이루어져 있습니다.
// // ex) 완성해야 하는 이름이 세 글자면 AAA, 네 글자면 AAAA

// // 조이스틱을 각 방향으로 움직이면 아래와 같습니다.

// // ▲ - 다음 알파벳
// // ▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
// // ◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
// // ▶ - 커서를 오른쪽으로 이동
// // 예를 들어 아래의 방법으로 JAZ를 만들 수 있습니다.

// // - 첫 번째 위치에서 조이스틱을 위로 9번 조작하여 J를 완성합니다.
// // - 조이스틱을 왼쪽으로 1번 조작하여 커서를 마지막 문자 위치로 이동시킵니다.
// // - 마지막 위치에서 조이스틱을 아래로 1번 조작하여 Z를 완성합니다.
// // 따라서 11번 이동시켜 "JAZ"를 만들 수 있고, 이때가 최소 이동입니다.
// // 만들고자 하는 이름 name이 매개변수로 주어질 때, 이름에 대해 조이스틱 조작 횟수의 최솟값을 return 하도록 solution 함수를 만드세요.

// // JEROEN	56
// // JAN	23


function solution(name) {
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
        let diff = name[i].charCodeAt() - 'A'.charCodeAt();
        sum += diff > 13 ? 26 - diff : diff;
    }

    let minMove = name.length - 1;

    for ( var i = 1 ;  i < names.length; i++ ) {
        if ( names[i] != 'A' ) {
            moveCnt = names.length-i;
            break;
        }
    }
    // for (let i = 1; i < name.length; i++) {
    //     if (name[i] === 'A') {
    //         for (var j = i + 1; j < name.length; j++) {
    //             if (name[j] !== 'A') {
    //                 break;
    //             }
    //         }

    //         const left = i - 1;
    //         const right = name.length - j;
    //         minMove = Math.min(minMove, left > right ? left + right * 2 : left * 2 + right);

    //         console.log('left >>> ' , left);
    //         console.log('right >>> ' , right);
    //         console.log('minMove >>> ' , minMove);

    //         i = j;
    //     }
    // }

    return sum + minMove;
}

// // function solution(name) {
// //     let sum = 0;
// //     for (let i = 0; i < name.length; i++) {
// //         let diff = name[i].charCodeAt() - 'A'.charCodeAt();
// //         console.log('diff >> ' , diff);
// //         sum += diff > 13 ? 26 - diff : diff;
// //         console.log('sum >>> ' , sum);
// //     }

// //     let minMove = name.length - 1;
// //     for (let i = 1; i < name.length; i++) {
// //         if (name[i] === 'A') {
// //             for (var j = i + 1; j < name.length; j++) {
// //                 if (name[j] !== 'A') {
// //                     break;
// //                 }
// //             }

// //             const left = i - 1;
// //             const right = name.length - j;
// //             minMove = Math.min(minMove, left > right ? left + right * 2 : left * 2 + right);

// //             i = j;
// //         }
// //     }

// //     return sum + minMove;
// // }
// // ["J", "E", "R" , "O" , "E" , "N"]
// // function solution(name) {
// //     var answer = 0;
// //     var start_index = 65;
// //     var end_index = 90;
// //     // name 길이만큼 AAA
// //     var nameArray = name.split("");             // ["J", "A", "N"]

// //     nameArray.map((x, index)=>{

// //         x.charCodeAt(0) > 78 ?  answer += (end_index - x.charCodeAt(0)) :    answer += x.charCodeAt(0) - start_index;
    
// //     });

// //     console.log('answer >> ' , answer);
// //     // for(var i =0; i< nameArray.length;i++) {


// //     // }
// //     //     if (nameArray[i+1] === "A"){

                
// //     //     } else {
// //     //         if ( x.charCodeAt(0) > 78) {
// //     //             answer ++;
// //     //             answer += (end_index - x.charCodeAt(0));
// //     //         } else {
// //     //             console.log("x >>> " , x, (x.charCodeAt(0) - start_index));
// //     //             answer += x.charCodeAt(0) - start_index;
// //     //             // if (x === "A") answer --;
// //     //         }
// //     //     }
// //     //     if (nameArray[i] === "A") {
           
// //     //         answer ++;
// //     //     } else {

// //     //     }

// //     }

// function solution(name) {
//     let length, reverseLength;

//     var answer = 0;
//     name = name.split("");             // ["J", "A", "A", "N"]

//     // 위, 아래 합
//     name.map((x, index)=> {
//         const diff = x.charCodeAt() - 'A'.charCodeAt();
//         diff > 13 ? answer += 26 - diff :  answer += diff ;
//         // console.log('sum >> ' , answer);
//     });

//     // 왼쪽으로 몇 칸 갈지
//     for (let i=1; i < name.length; i++) {
//         if (name[i] !== 'A') {
//             reverseLength = name.length - i;
//             break;
//         }
//     }

//     console.log('reverseLength >> ' , reverseLength);
//     // 오른쪽으롬
//     for (let i= name.length; i > 0; i--) {
//         if (name[i] !== 'A') {
//             length = i;
//             break;
//         }
//     }

//     console.log('length >> ' , length);

//     // console.log(length, reverseLength);

//     return answer + (length < reverseLength ? length : reverseLength);
// }

// function solution(name) {
//     var answer = 0;
//     var nameArray = name.split("");             // ["J", "A", "A", "N"]

//     // 위, 아래 합
//     nameArray.map((x, index)=> {
//         const diff = x.charCodeAt() - 'A'.charCodeAt();
//         diff > 13 ? answer += 26 - diff :  answer += diff ;
//         console.log('sum >> ' , answer);
//     });
//     // 왼쪽 가는 경우

//     // 오른쪽 가는 경우

//     // 왼쪽 + 오른쪽 가는경우

//     // 최소 이동
//     // const minMove = nameArray.length - 1;

//     // for (let i = 1; i < nameArray.length; i++) {
//     //     if (nameArray[i] === 'A') {
//     //         for (var j = i + 1; j < nameArray.length; j++) {
//     //             if (nameArray[j] !== 'A') {
//     //                 break;
//     //             }
//     //         }

//     //         console.log('j >>>> ' , j);

//     //         const left = i - 1;
//     //         const right = nameArray.length - j;
//     //         console.log('left >>. ' , left);
//     //         console.log('right >>. ' , right);
//     //         minMove = Math.min(minMove, left > right ? left + right * 2 : left * 2 + right);

//     //         i = j;
//     //     }
//     // }
// }


//     // answer ++;
//     // nameArray.map((x, index)=>{

//     //     if (x === "A") {
//     //         answer ++ ;
//     //     } else {
//     //         if ( x.charCodeAt(0) > 78) {
//     //             answer ++;
//     //             answer += (end_index - x.charCodeAt(0));
//     //         } else {
//     //             console.log("x >>> " , x, (x.charCodeAt(0) - start_index));
//     //             answer += x.charCodeAt(0) - start_index;
//     //             // if (x === "A") answer --;
//     //         }
//     //     }
//     //     // console.log('x >>> ' , x);
//     //     // console.log(x.charCodeAt(0));
//     // });
//     // console.log('nameArray >> ', nameArray);
//     // console.log('answer >> ', answer);
//     // 10
//     return answer;
// }