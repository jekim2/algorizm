// 카카오톡 게임별의 하반기 신규 서비스로 다트 게임을 출시하기로 했다.
// 다트 게임은 다트판에 다트를 세 차례 던져 그 점수의 합계로 실력을 겨루는 게임으로, 모두가 간단히 즐길 수 있다.
// 갓 입사한 무지는 코딩 실력을 인정받아 게임의 핵심 부분인 점수 계산 로직을 맡게 되었다.
// 다트 게임의 점수 계산 로직은 아래와 같다.
// 다트 게임은 총 3번의 기회로 구성된다.
// 각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.
// 3. 점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고
// 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.
// 4. 옵션으로 스타상(*) , 아차상(#)이 존재하며 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다.
// 아차상(#) 당첨 시 해당 점수는 마이너스된다.
// 5. 스타상(*)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(*)의 점수만 2배가 된다. (예제 4번 참고)
// 스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다. (예제 4번 참고)
// 스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고)
// Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다.
// 스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.
// 0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환하100djs는 함수를 작성하라.

// ex.
// 1	1S2D*3T	37	11 * 2 + 22 * 2 + 33
// 2	1D2S#10S	9	12 + 21 * (-1) + 101
// 3	1D2S0T	3	12 + 21 + 03
// 4	1S*2T*3S	23	11 * 2 * 2 + 23 * 2 + 31
// 5	1D#2S*3S	5	12 * (-1) * 2 + 21 * 2 + 31
// 6	1T2D3D#	-4	13 + 22 + 32 * (-1)
// 7	1D2S3T*	59	12 + 21 * 2 + 33 * 2


function solution(dartResult) {
    var answer = 0;
    var testArray = [];
    var array = dartResult.split("");
    array.map ((x , index) => {
        var temp = 0;
        if (x == "S" || x == "D" || x == "T") {

            // 전전이 숫자냐
            if (!isNaN(array[index -2])) {
                temp =  array[index -2] + array[index - 1];
            } else {
                temp = array[index - 1];
            }
            console.log("temp 11111 >> " , temp);
            switch (x) {
                case "S":
                    temp = Math.pow(temp, 1);
                    break;
                case "D":
                    temp = Math.pow(temp, 2);
                    break;
                case "T":
                    temp = Math.pow(temp, 3);
                    break;
                default:
                    break;
            }
            testArray.push(temp);
            // console.log("temp 22222 >> " , temp);
        } else if (x == "*") {
            console.log("*** testArray >> " , testArray);
            if (testArray.length == 1) {
                testArray[(testArray.length) -1] =  testArray[(testArray.length) -1] * 2;
            } else {
                testArray[(testArray.length) -1] = testArray[(testArray.length) -1] * 2;
                testArray[(testArray.length) -2] = testArray[(testArray.length) -2] * 2;
            }
        } else if (x == "#") {
            console.log("### testArray >> " , testArray);
            testArray[(testArray.length) -1] =  testArray[(testArray.length) -1] * (-1);
        }
    });
    // console.log("testArray >> " , testArray);
    answer = testArray.reduce((a, b)=> a + b,0);

    return answer;
}


function solution(dartResult) {
    var res = [];
    var matches = dartResult.match(/(?:\\d+)|\\w|[#*]/g);
    console.log("matches >>" , matches);
    for (var i = 0; i < matches.length; ++i) {
        switch (matches[i]) {
            case 'S': break;
            case 'D': res[res.length-1] *= res[res.length-1]; break;
            case 'T': res[res.length-1] = Math.pow(res[res.length-1], 3); break;
            case '*':
                if (res.length > 1) res[res.length-2] *= 2;
                res[res.length-1] *= 2;
                break;
            case '#':
                res[res.length-1] *= -1;
                break;
            default:
                res.push(matches[i] * 1);
        }
    }
    return res.reduce((a, b) => a + b);
}

// function solution(dartResult) {
//     var answer = 0;
//     var data = dartResult;

//     // ex.1
//     // var array = dartResult.split("");

//     // console.log("array >> " , array);

//     // for (var i =0; i< array.length; i++) {

//     // }

//     // for (var i = 0; array.length; i++) {
//     //     console.log(array[i]);
//     // }

//     var x, y, z, w = 0;
//     var array = dartResult.split("").reduce((a, b, i)=> {

//         console.log('b>>> ' , b);






//         // if (b == "S") {
//         //     x = Math.pow(a,1);
//         // } else if (b == "D") {
//         //     y = Math.pow(a,2);
//         // } else if (b == "T") {
//         //     z = Math.pow(a,3);
//         // }

//         // if (b === "*") {
//         //     x = x * 2;
//         //     y = y * 2;
//         //     z = z * 2;
//         // } else if (b == "#") {
//         //     x = x * (-1);
//         //     y = y * (-1);
//         //     z = z * (-1);
//         // }

        

//         // if (x == undefined) {
//         //     x = 0;
//         // } 
//         // if (y == undefined) {
//         //     y = 0;
//         // } 
//         // if (z == undefined) {
//         //     z = 0;
//         // }
//         // answer = x + y + z;
//         // console.log("answer >>> " , answer);
//     });
//     console.log('x >> ' , x);
//     console.log('y >> ' , y);
//     console.log('z >> ' , z);
//     return answer;
// }

solution ("1S2D*3T");