// 수평 직선에 탑 N대를 세웠습니다. 모든 탑의 꼭대기에는 신호를 송/수신하는 장치를 설치했습니다.
// 발사한 신호는 신호를 보낸 탑보다 높은 탑에서만 수신합니다. 또한, 한 번 수신된 신호는 다른 탑으로 송신되지 않습니다.
// 예를 들어 높이가 6, 9, 5, 7, 4인 다섯 탑이 왼쪽으로 동시에 레이저 신호를 발사합니다.
// 그러면, 탑은 다음과 같이 신호를 주고받습니다. 높이가 4인 다섯 번째 탑에서 발사한 신호는 높이가 7인 네 번째 탑이 수신하고,
// 높이가 7인 네 번째 탑의 신호는 높이가 9인 두 번째 탑이, 높이가 5인 세 번째 탑의 신호도 높이가 9인 두 번째 탑이 수신합니다. 
// 높이가 9인 두 번째 탑과 높이가 6인 첫 번째 탑이 보낸 레이저 신호는 어떤 탑에서도 수신할 수 없습니다.

// 송신 탑(높이)	수신 탑(높이)
// 5        (4)	     4(7)
// 4        (7)	     2(9)
// 3        (5)	            2(9)
// 2        (9)	-
// 1        (6)

// function solution(heights) {
//     var answer = [];
    
//     for (var i = 0; i < heights.length ; i++) {
//         if (i == 0) {
//             answer.push(0);
//         } else {
//             var index = 0;
//             for (var j = (i - 1); j <= i ; j --) {
                
//                 if (heights[j] > heights[i]) {
//                     index = j + 1;
//                     break;
//                 }
//             }
//             answer.push(index);
//         }
//     }
//     return answer;
// }
// [6, 9, 5, 7, 4]
function solution(heights) {

    return heights.map ((x, i) => {
        console.log('x >> ' , x);
        while(i) {
            i--;
            if (heights[i] > x) {
               return i + 1;
            }
            console.log('i >>> ' , i);
        }
        return 0;
        // answer.push(0);
    });
}