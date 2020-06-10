
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.

function solution(s) {
    var answer = '';
    var index = Math.round(s.length / 2);

    if (s.length % 2 === 0) {
        answer = s.substring(index - 1, index + 1);

    } else {
        answer = s.substring(index - 1, index);
    }
    return answer;
}



function otherSolution(s) {
    return s.length % 2 == 0 ? s.substr(s.length / 2 - 1, 2) : s.substr(Math.floor(s.length / 2), 1);
}


