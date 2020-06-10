// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

// 제한 조건
// n은 2이상 1000000이하의 자연수입니다.
//ex.
// 10	4
// 5	3
function solution(n) {
    var array  = [];
    var count = 0;

    let startTime = new Date();

    for (var i = 2; i<= n ; i++) {
        count  =0;
        for (var j = 2; j < i; j ++) {
            if (i % j === 0) {
                count ++;
            }
        }
        if (count === 0) {
            array.push(i);
        }
    }

    let endTime = new Date();

    let gapTime = endTime.getTime() - startTime.getTime();
    console.log('gapTime: ', gapTime + "ms");

    return array.length;
}


function solution2(n) {
    var answer = 0;
    var array = [];
    for (var i = 2; i <= n; i ++) {
        array.push(i);
    }
    console.log("array list >>> " , array);


    for (var i = 2; i <= n; i ++) {
        for (var j = i + i; j < n ; j += i) {
            if (array[i] == 0) continue;
            array[j] = 0;
        }
    }
    // 2, 4, 6, 8 ... 배수들 빼기

    for (var i = 0; i< array.length; i++) {
        if (array[i] !== 0) {
            answer ++;
        }
    }

    return answer;

}
























function solution2(n) {
    let answer = 0;
    let arr = [];

    let startTime = new Date();

    // 빈 배열에 값 초기화
    for (let i = 2; i <= n; i++) {
        arr[i] = i;
    }

    for (let i = 2; i <= n; i++) {
        if (arr[i] === 0) // 이미 체크된 수의 배수는 확인하지 않는다
            continue;

        for (let j = i + i; j <= n; j += i) { // i를 제외한 i의 배수들은 0으로 체크
            arr[j] = 0;
            console.log("arr >>> " , arr);
        }
    }

    // 0이 아닌 수들은 모두 소수이므로, answer을 증가한다.
    for (let i = 2; i <= n; i++) {
        if (arr[i] !== 0)
            answer++;
    }

    let endTime = new Date();
    let gapTime = endTime.getTime() - startTime.getTime();
    console.log('gapTime: ', gapTime + "ms");    

    return answer;
}




// function solution(n) {
//     var answer = 0;
//     var count = 0;
//     var array = [];
//     for (var i = 2; i <= n; i++) {
//         for (j = 2 ; j < i ; j++) {
//             console.log("j >>>> " , j);
//             console.log("j % i >>>> " , j % i);

//             if (j % i === 0) {
//                 count ++;
//             }

//             if (count == 0) {
//                 array.push(i);
//             }

//             // if (i % j === 0) if (!array.includes(i)) array.push(i);
//         }
//     }
//     console.log("array >>> ", array);
//     return answer;
// }

// function numberOfPrime(n) {
//     var result = 0;
//     var primeNumber = [];
//     // 함수를 완성하세요.
//     for (var i = 2; i <= n; i++) {
//       var devided = 0;
  
//       for (var a = 2; a < i; a++) {
//         if (i % a === 0) {
//           devided += 1;
//         }
//       }
//       if (devided === 0) {
//         primeNumber.push(i);
//       }
//     }
  
//     result = primeNumber.length;
//     return result;
//   }