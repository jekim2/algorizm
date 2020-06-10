// 함수 solution은 정수 n을 매개변수로 입력받습니다.
// n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
// 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// 제한 조건
function solution(n) {
    // var answer = 0;
    // var array = [];
    // array = Number(String(n).split("").sort((a,b)=> b-a).join(""));
    // answer = Number(array.sort((a,b)=> b-a).join(""));
    return Number(String(n).split("").sort((a,b)=> b-a).join(""));
}

function solution(n) {
  const newN = n + "";
  const newArr = newN
    .split("")
    .sort()
    .reverse()
    .join("");

  return +newArr;
}


function solution(n) {
    return parseInt(n.toString().split('').sort((val1,val2) => val2-val1).join(''));
}