// 땅따먹기
// 문제 설명
// 땅따먹기 게임을 하려고 합니다.
// 땅따먹기 게임의 땅(land)은 총 N행 4열로 이루어져 있고, 모든 칸에는 점수가 쓰여 있습니다.
// 1행부터 땅을 밟으며 한 행씩 내려올 때, 각 행의 4칸 중 한 칸만 밟으면서 내려와야 합니다.
// 단, 땅따먹기 게임에는 한 행씩 내려올 때, 같은 열을 연속해서 밟을 수 없는 특수 규칙이 있습니다.

// 예를 들면,

// | 1 | 2 | 3 | 5 |

// | 5 | 6 | 7 | 8 |

// | 4 | 3 | 2 | 1 |

// 로 땅이 주어졌다면, 1행에서 네번째 칸 (5)를 밟았으면, 2행의 네번째 칸 (8)은 밟을 수 없습니다.

// 마지막 행까지 모두 내려왔을 때, 얻을 수 있는 점수의 최대값을 return하는 solution 함수를 완성해 주세요. 위 예의 경우, 1행의 네번째 칸 (5), 2행의 세번째 칸 (7), 3행의 첫번째 칸 (4) 땅을 밟아 16점이 최고점이 되므로 16을 return 하면 됩니다.

// 제한사항
// 행의 개수 N : 100,000 이하의 자연수
// 열의 개수는 4개이고, 땅(land)은 2차원 배열로 주어집니다.
// 점수 : 100 이하의 자연수
// 입출력 예
// land	answer
// [[1,2,3,5],[5,6,7,8],[4,3,2,1]]	16
// 입출력 예 설명
// 입출력 예 #1
// 문제의 예시와 같습니다.


// function solution(land) {
//     return Math.max(...land.reduce((a, c, i) => {
//         return [
//             c[0] + Math.max(a[1], a[2], a[3]),  
//             c[1] + Math.max(a[0], a[2], a[3]),
//             c[2] + Math.max(a[0], a[1], a[3]),
//             c[3] + Math.max(a[0], a[1], a[2]),
//         ];
//     }, [0, 0, 0, 0]));
// }

// function solution(land) {
//     var answer = 0;
//     var temp_data = 0;

//     for(var i = 0; i< land.length; i++) {

//         for (var j = 0; j < land[i].length ; j++) {
//             temp_data += land[i][j];
//         }

//     }

// }

// function solution(land) {
//     // console.log('land >> ' , land);

//     // var answer = 0;
//     // var index_array = [];
//     // var index = land[0].indexOf(Math.max(...land[0]));
    
//     // for(var i = 0; i< land.length; i++) {
//     //     var max_data = Math.max(...land[i]);
//     //     console.log('land >> ' , land[i]);
//     //     console.log('index >> ' , index);
//     //     console.log('max_data >> ' , max_data);
//     //     for (var j = 0; j < land[i].length ; j++) {
//     //         if (max_data == land[i][j]) {
//     //             index_array.push(j);
//     //         }
//     //     }
//     //     console.log('index_array >>> ' , index_array);
//     //     if (i === 0) {
//     //       answer += Math.max(...land[i]);
//     //     } else {
//     //         // 동일 숫자 있는 경우
//     //         if (index_array.length > 1) {


//     //         } else {
//     //             console.log('land >> ' , Math.max(...land[i]));
//     //             land[i].splice(index_array[0], 1);
//     //             answer +=  Math.max(...land[i]);
//     //         }

//     //     }
       

//     //     // console.log('land >> ' , Math.max(...land[i]));

//     //     // index == -1 인가
//     //         //

//     //     // index != -1 인가


//     //     // idex == -1 인가
//     // //     if (index == -1) {
//     // //         index = land[i].indexOf(Math.max(...land[i]));      // 같은 거 있을 때..
//     // //     } else {
//     // //         land[i].splice(index, 1);
//     // //     }
//     // //     answer +=  Math.max(...land[i]);

//     //     console.log('answer >> ' , answer);
//     // }

//     // return answer;
// }
function solution (land) {
    return Math.max(...land.reduce((a, c, i) => {
        return [
            c[0] + Math.max(a[1] , a[2] , a[3]),
            c[1] + Math.max(a[0] , a[2] , a[3]),
            c[2] + Math.max(a[0] , a[1] , a[3]),
            c[3] + Math.max(a[0] , a[1] , a[2]),
        ]
        }));
}

// solution([[1,1,1,1],[5,6,7,8],[4,3,2,1]]);
solution([[1,2,3,5],[5,6,7,8],[4,3,2,1]]);
// solution([[1,2,3,5],[5,6,8,7],[2,3,4,1]]);