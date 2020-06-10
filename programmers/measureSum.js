// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 제한 사항
// n은 0 이상 3000이하인 정수입니다.
// 입출력 예
// 12	28
// 5	6
function solution(n) {
    var answer = 1;

    if (n == 1) {
        return 1;
    } else if  (n == 0) {
        return 0;
    } else {
        for (var i = 1; i <= n ; i ++ ) {
            // answer += i;
            for (var j = 1; j <= (n / 2) ; j++) {
                console.log(" i>>> " , i);
                console.log(" j>>> " , j);
                if (i * j == n) {
                    answer += i;
                    console.log(" i * j>>> " , i);
                }
            }
        }
    }
    return answer;
}


function solution(n, a=0, b=0) {
    return n<=a/2?b:solution(n,a+1,b+=n%a?0:a);
}

// solution(2);

// function solution(n) {
//     var answer = 1;

//     if (n == 1) {
//         return 1;
//     } else {
//         for (var i = 1; i <= n ; i ++ ) {
//             // answer += i;
//             for (var j = 1; j <= (n / 2) ; j++) {
//                 console.log(" i>>> " , i);
//                 console.log(" j>>> " , j);
//                 if (i * j == n) {
//                     answer += i;
//                     console.log(" i * j>>> " , i);
//                 }
//             }
//         }
//     }
//     return answer;
// }