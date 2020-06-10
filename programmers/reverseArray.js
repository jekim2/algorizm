// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.
// ex. 12345[5,4,3,2,1]

function solution(n) {
    var answer = [];
    answer =String(n).split("").reverse();
    answer = answer.map( x=> Number(x));
    return answer;
}

function solution(n) {
    return n.toString().split('').reverse().map(o => o = parseInt(o));
}

function solution(n) {
    return (n + '').split('').reverse().map(n => parseInt(n));
}
