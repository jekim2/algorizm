// 124 나라가 있습니다. 124 나라에서는 10진법이 아닌 다음과 같은 자신들만의 규칙으로 수를 표현합니다.

// 124 나라에는 자연수만 존재합니다.
// 124 나라에는 모든 수를 표현할 때 1, 2, 4만 사용합니다.
// 예를 들어서 124 나라에서 사용하는 숫자는 다음과 같이 변환됩니다.

// 1  1
// 2  2
// 3  4
// 4  11
// 5  12
// 6  14
// 7  21
// 8  22
// 9  24
// 10 41
// 11 42
// 12 44
// 13 111
// 14 112
// 15 114
// 16 121
// 17 122
// 18 124
// 19 


function solution(n) {
    var answer = '';
    while (n > 0) {
        if (n % 3 == 0) {

        } else if (n % 3 == 1) {

        } else {

        }

        // if (n % 3 == 0) {
        //     answer = '4' + answer;
        // } else if (n % 3 == 1) {

        // }
    }
    // for (var i = 0; i < n; i ++) {
    //     answer = bArray[i];
    //     if (answer == undefined) {
    //         answer = 
    //     }
    // }
    return answer;
}

function change124world(n) {
    return n === 0 ? '' : change124world(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
  }

  function change124world(n) {
    var answer = "";
    var array1_2_4_world = new Array(4, 1, 2); //3%3 = 0, 1%3 = 1, 2%3 = 2

    console.log(array1_2_4_world);
  
    while(n) {
      answer = array1_2_4_world[n % 3] + answer;
      n = Math.floor((n - 1) / 3);
    }
  
    return answer;
  }
  
  