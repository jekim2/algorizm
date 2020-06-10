// 피보나치 수
// 문제 설명
// 피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.

// 예를들어

// F(2) = F(0) + F(1) = 0 + 1 = 1
// F(3) = F(1) + F(2) = 1 + 1 = 2
// F(4) = F(2) + F(3) = 1 + 2 = 3
// F(5) = F(3) + F(4) = 2 + 3 = 5
// 와 같이 이어집니다.

// 2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.

// 제한 사항
// * n은 1이상, 100000이하인 자연수입니다.

// 입출력 예
// n	return
// 3	2
// 5	5
// 입출력 예 설명
// 피보나치수는 0번째부터 0, 1, 1, 2, 3, 5, ... 와 같이 이어집니다.

function solution(n) {

  if (n === 0) return 0;
  else if (n === 1  || n === 2) return 1;

  const temp_array = [];

  temp_array[1] = 1;
  temp_array[2] = 1;

  for(let i = 3; i <= n; i++){
  	temp_array[i] = (temp_array[i - 1] + temp_array[i - 2]) % 1234567;
  }


  return temp_array[n] ;


}


// function solution(n) {

//     if (n < 2) {
//         return n;
//     }
//     console.log(((solution(n-1) % 1234567) + (solution(n-2) % 1234567)));
//     return   ((solution(n-1) % 1234567) + (solution(n-2) % 1234567)) ;
//   }
// function solution(n) {
//     var answer = 0;

//     const  calculators = (x) => {
//         if (x == 0) return 0;
//         else if (x == 1) return 1;
//         else { return calculators(x-1) + calculators(x-2); }
//     }

//     answer = calculators(n) % 1234567;
//     // console.log('answer >> ' , answer);
//     return answer;
// }

solution(5);