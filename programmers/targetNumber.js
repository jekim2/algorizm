// 타겟 넘버
// 문제 설명
// n개의 음이 아닌 정수가 있습니다. 이 수를 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다. 예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.

// -1+1+1+1+1 = 3
// +1-1+1+1+1 = 3
// +1+1-1+1+1 = 3
// +1+1+1-1+1 = 3
// +1+1+1+1-1 = 3
// 사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 주어지는 숫자의 개수는 2개 이상 20개 이하입니다.
// 각 숫자는 1 이상 50 이하인 자연수입니다.
// 타겟 넘버는 1 이상 1000 이하인 자연수입니다.
// 입출력 예
// numbers	target	return
// [1, 1, 1, 1, 1]	3	5
// 입출력 예 설명
// 문제에 나온 예와 같습니다.

// function solution(numbers, target) {
//     var answer = 0;
//     return answer;
// }

function solution(numbers, target) {
    var answer = 0;
  // 처음 시작은 개수 0개, 합계 0 으로 시작하면서 모든 경우를 dfs로 탐색
    recur(0, 0);
    return answer;

    function recur(count, sum){
        // console.log('count >> ' , count);
        // console.log('sum >> ' , sum);
        // 배열 갯수만큼 계산 =  타겟넘버 => count ++;
        if( count === numbers.length){
          // 주어진 조건에 만족하면 answer++
        //   debugger;
          console.log('sum >> ', sum);
            if(sum === target ){
                answer++
            }
          // 리턴해주어야함
            return;
        }

      // left child 는 +일 경우
        recur(count+1, sum+numbers[count]);
        // console.log('count >> ', count);
      // right child 는 -일 경우
        recur(count+1, sum-numbers[count]);
    }
}