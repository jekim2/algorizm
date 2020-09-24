/* 소수 찾기
문제 설명
한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

제한사항
numbers는 길이 1 이상 7 이하인 문자열입니다.
numbers는 0~9까지 숫자만으로 이루어져 있습니다.
013은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.
입출력 예
numbers	return
17	3
011	2
입출력 예 설명
예제 #1
[1, 7]으로는 소수 [7, 17, 71]를 만들 수 있습니다.

예제 #2
[0, 1, 1]으로는 소수 [11, 101]를 만들 수 있습니다.

11과 011은 같은 숫자로 취급합니다. */

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let input =[1,2,3,4,5,6,7,8];

// const checkData = (array) => {
//     let accend = 0;
//     let decend = 0;
//     for(let i =0; i< input.length;i++) {
//       console.log(input[i]);
//       if(input[i] - input[i+1] == -1) {
//         accend ++;
//       } else {
//         decend ++;
//       }
//     }
//     return [accend, decend];
//   }

// rl.on('line', function (line) {
//   input.push(line)
//   console.log(checkData(input));

// })
//   .on('close', function () {
//   console.log(input);
//   process.exit();
// });


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

const checkData = (array) => {
  console.log('array >> ' , array);
  let accend = 0;
  let decend = 0;
  for(let i =0; i< input.length;i++) {
    if(input[i] - input[i+1] == -1) {
      accend ++;
    }else if (input[i] - input[i + 1] === 1) {
      decend ++;
    }
  }
  return [accend, decend];
}

rl.on('line', function (line) {
  input.push(line);
  console.log(checkData(input));
  let temp_array = checkData(input);
  if(temp_array[0] == input.length) {
    console.log('ascending');
  } else if(temp_array[1] == input.length) {
    console.log('descending');
  } else {
    console.log('mixed');
  }
}).on('close', function () {


  process.exit();
});

// let array = [1,2,3,4,5,6,7,8];
// const checkData = (array) => {
//   let accend = 0;
//   let decend = 0;
//   for(let i =0; i< input.length;i++) {
//     if(input[i] - input[i+1] == -1) {
//       accend ++;
//     } else {
//       decend ++;
//     }
//   }
//   return [accend, decend];
//   // return N*(N+1)/2;
// }

// rl.on('line', line => {
//   const input = Array(line);
//   console.log(checkData(input));



// }).on('close', () => {
//   process.exit();
// })


// const getPermutations= function (arr, selectNumber) {
//     const results = [];
//     if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return
//     arr.forEach((fixed, index, origin) => {
//       const rest = [...origin.slice(0, index), ...origin.slice(index+1)] // 해당하는 fixed를 제외한 나머지 배열
//       console.log('rest >>  ' , rest);
//       const permutations = getPermutations(rest, selectNumber - 1); // 나머지에 대해 순열을 구한다.
//       console.log('permutations >>  ' , permutations);
//       const attached = permutations.map((permutation) => [fixed, ...permutation]); // 돌아온 순열에 대해 떼 놓은(fixed) 값 붙이기
//       results.push(...attached); // 배열 spread syntax 로 모두다 push
//     });
//     return results; // 결과 담긴 results return
// };
//   const example = [1,2,3,4];
//   const result = getPermutations(example, 3);
//   console.log(result);
//   // => [

// // function solution(numbers) {
// //     var answer = 0;

// //     numbers = numbers.split("");

// //     console.log('numbers >> ' , numbers);

// //     const isPrime = (n) => {
// //         if(n == 1) return false;
// //         if(n == 2) return true;

// //         for(let i = 2; i < n; i++ ) {
// //             if(n%i == 2) return true;
// //         }

// //         return false;
// //     }

// //     // while(numbers.length > 0) {
// //         // let str = numbers.shift();
// //         // if(isPrime(Number(str))) {
// //         //     answer++;
// //         // }
// //         // console.log('numbers >> ' , str, numbers);
// //         // for(let i = 0; i< numbers.length; i++) {
// //         //     if(isPrime(Number(str) + )
// //         //     // numbers
// //         // }


// //     // }

// //     return answer;
// }

// solution("17")
