// 문제 설명
// 숫자 야구 게임이란 2명이 서로가 생각한 숫자를 맞추는 게임입니다. 게임해보기

// 각자 서로 다른 1~9까지 3자리 임의의 숫자를 정한 뒤 서로에게 3자리의 숫자를 불러서 결과를 확인합니다.
// 그리고 그 결과를 토대로 상대가 정한 숫자를 예상한 뒤 맞힙니다.

// * 숫자는 맞지만, 위치가 틀렸을 때는 볼
// * 숫자와 위치가 모두 맞을 때는 스트라이크
// * 숫자와 위치가 모두 틀렸을 때는 아웃
// 예를 들어, 아래의 경우가 있으면

// A : 123
// B : 1스트라이크 1볼.
// A : 356
// B : 1스트라이크 0볼.
// A : 327
// B : 2스트라이크 0볼.
// A : 489
// B : 0스트라이크 1볼.
// 이때 가능한 답은 324와 328 두 가지입니다.

// 질문한 세 자리의 수, 스트라이크의 수, 볼의 수를 담은 2차원 배열 baseball이 매개변수로 주어질 때, 가능한 답의 개수를 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 질문의 수는 1 이상 100 이하의 자연수입니다.
// baseball의 각 행은 [세 자리의 수, 스트라이크의 수, 볼의 수] 를 담고 있습니다.


// baseball	return
// [[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]]	2
// 중복되거나 0인 수는 세지 않는다!
// // function solution(baseball) {
// //     var answer = []
  
// //     // 123~987 완전 탐색
// //     for (var i = 123; i <= 987; i++) {
// //       const number = String(i)
// //       if (
// //         number.charAt(0) == number.charAt(1) ||
// //         number.charAt(1) == number.charAt(2) ||
// //         number.charAt(2) == number.charAt(0) ||
// //         number.indexOf('0') > 0
// //       )
// //         continue
  
// //       // check가 true로 남아있으면 모든 조건을 만족하는 것
// //       var check = true
      
// //       // baseball 배열의 조건 모두 탐색
// //       for (var j = 0; j < baseball.length; j++) {
// //         var countStrike = 0
// //         // 현재 baseball 배열의 숫자의 모든 자릿수 비교 (strike)
// //         for (var k = 0; k < 3; k++) {
// //           if (number.charAt(k) === String(baseball[j][0]).charAt(k)) countStrike++
// //         }
  
// //         if (countStrike !== baseball[j][1]) {
// //           check = false
// //           break
// //         }
          
// //         var countBall = 0
// //         // 현재 baseball 배열의 숫자의 모든 자릿수 비교 (ball)
// //         for (var k = 0; k < 3; k++) {
// //           if (number.indexOf(String(baseball[j][0]).charAt(k)) >= 0) countBall++
// //         }
  
// //         // 위의 조건에서 중복되는 strike의 수를 빼줘야함.  
// //         if (countBall - countStrike !== baseball[j][2]) {
// //           check = false
// //           break
// //         }
// //       }
// //       if (check) answer.push(i)
// //     }
  
// //     return answer.length
// //   }

  function solution(baseball) {
    var numbers = [];
    for (var i = 123; i <= 987; i++) {
        var x = i + "";
        var data = x.split("");
        var checkFlag = true;

        // "0" 포함 안되고 , 같은 숫자 없는 조건
        if (!(data[0] === data[1] || data[0] == data[2] || data[1] == data[2] ||  (data[0] == "0" || data[1] == "0" || data[2] == "0"))) {
            console.log(data);
            for (var j = 0; j < baseball.length; j++) {
                //일치하는 숫자를 찾는 것이므로 스트라이크 + 볼의 갯수만큼 찾도록
                var sCount = 0;
                for(var k = 0; k< 3; k++) {
                    if (data[k] === String(baseball[j][0]).charAt(k)) {
                        sCount ++;
                    }
                }

                if (sCount !==  baseball[j][1]) {
                    checkFlag = false;
                    break;
                }

                var bCount = 0;
                for(var k = 0; k< 3; k++) {
                    if (String(baseball[j][0]).indexOf(data[k]) > -1) {
                        bCount ++;
                    }
                }

                if (bCount - sCount !== baseball[j][2]){
                    checkFlag = false;
                    break;
                }

            }
            if (checkFlag) {
                numbers.push(data);
            }

        }
    }
    console.log('numbers >>  ' , numbers);
    return numbers.length;
  }
// 문제 설명

// 숫자 야구 게임이란 2명이 서로가 생각한 숫자를 맞추는 게임입니다. 게임해보기



// 각자 서로 다른 1~9까지 3자리 임의의 숫자를 정한 뒤 서로에게 3자리의 숫자를 불러서 결과를 확인합니다.

// 그리고 그 결과를 토대로 상대가 정한 숫자를 예상한 뒤 맞힙니다.



// * 숫자는 맞지만, 위치가 틀렸을 때는 볼

// * 숫자와 위치가 모두 맞을 때는 스트라이크

// * 숫자와 위치가 모두 틀렸을 때는 아웃

// 예를 들어, 아래의 경우가 있으면



// A : 123

// B : 1스트라이크 1볼.

// A : 356

// B : 1스트라이크 0볼.

// A : 327

// B : 2스트라이크 0볼.

// A : 489

// B : 0스트라이크 1볼.

// 이때 가능한 답은 324와 328 두 가지입니다.



// 질문한 세 자리의 수, 스트라이크의 수, 볼의 수를 담은 2차원 배열 baseball이 매개변수로 주어질 때, 가능한 답의 개수를 return 하도록 solution 함수를 작성해주세요.



// 제한사항

// 질문의 수는 1 이상 100 이하의 자연수입니다.

// baseball의 각 행은 [세 자리의 수, 스트라이크의 수, 볼의 수] 를 담고 있습니다.




// baseball return

// [[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]] 2
// // function solution(baseball) {
// //     var answer = 0;
// //     console.log('baseball >> ', baseball);
// //     var numbers = [];

// //     const chkStrike = (data, target, stNum) => {
// //         // console.log('data >> ' , data);
// //         // console.log('target >> ' , target);
// //         // console.log('stNum >> ' , stNum);
// //         var count = 0;

// //         for (var i = 0; i< target.length; i++) {
// //             if (data[i] === String(target[i])){
// //                 count ++;
// //             }
// //         }
// //         return count === stNum;

// //     };

// //     const chkBall = (data, target, bNum) => {
// //         var count = 0;
// //         for (var i = 0;  i< data.length; i++) {
// //             if (String(target).indexOf(data[i]) > -1 ) {
// //                 count ++;
// //             }
// //             // else return false;
// //         }
// //          // if ()
// //         return bNum === count;
// //     }

// //     for (var i = 123; i <= 987; i++) {
// //         var x = i + "";
// //         var data = x.split("");
// //         // "0" 포함 안되고 , 같은 숫자 없는 조건
// //         if (!((data[0] === data[1] && data[0] === data[2] && data[1] === data[2] ) || (data[0] == "0" || data[1] == "0" || data[2] == "0"))){
// //             // console.log(data);
// //             for (var j = 0; j < baseball.length; j++) {
// //                 //일치하는 숫자를 찾는 것이므로 스트라이크 + 볼의 갯수만큼 찾도록
// //                 if (chkStrike(data, baseball[j][0], baseball[j][1]) && chkBall(data, baseball[j][0], baseball[j][1])) {
// //                     numbers.push(data);
// //                 }
// //             }

// //         }
// //     }
// //     // console.log('number >> ', numbers);

// //     answer = numbers.length;

// //     return answer;
// // }

// function solution (baseball) {
//     var answer = 0;

//     for (var i = 123 ; i <= 987 ; i++) {
//         var number = String(i);
//         console.log('number >> ' , number);
//         if (
//             number.charAt(0) == number.charAt(1) ||
//             number.charAt(1) == number.charAt(2) ||
//             number.charAt(2) == number.charAt(0) ||
//             number.indexOf('0') > 0
//         )
//         continue;
//         console.log('i >> ', i);


//     }


// }

solution([[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]]);