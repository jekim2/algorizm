// 길이가 n이고, 수박수박수박수....와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요.
// 예를들어 n이 4이면 수박수박을 리턴하고 3이라면 수박수를 리턴하면 됩니다.
// ex. 3	수박수
//     4	수박수박

function solution(n) {
    var answer = '';
    var x = '';
    for (var i = 1 ; i <= n; i++) {
        if (i % 2 == 0) {
            x = "박";
        } else {
            x = "수";

        }
        answer += x;
    }

    console.log("answer >>>> " ,  answer);

    return answer;
}