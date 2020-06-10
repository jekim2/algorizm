// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
// 예를 들어 AB는 1만큼 밀면 BC가 되고, 3만큼 밀면 DE가 됩니다. z는 1만큼 밀면 a가 됩니다.
// 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 제한 조건
// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.
// 입출력 예
// AB	    1	BC
// z	    1	a
// a B z	4	e F d

function solution(s, n) {
    var answer = '';
    var array = [];
    array = s.split("");
    var isUpeer = false;

    for (var i = 0; i < array.length; i ++) {
        if ( array[i] === " ") {
            charCodeAtPlus = " ";

        } else {
            var charCodeAt = array[i].charCodeAt(i);
            var charCodeAtPlus = array[i].charCodeAt(i) + n
            // console.log("cahrCodeAt >>> " , charCodeAt);
            // console.log("fromCharCode >>> " , String.fromCharCode( array[i].charCodeAt() + n));
            // console.log("fromCharCode >>> " , array[i].charCodeAt() + n);
            if (charCodeAtPlus > 90) {
                if (charCodeAt >= 65  && charCodeAt <= 90) {
                    isUpeer = true;
                    var charCodeAtPlus = 97 + ((array[i].charCodeAt(i) + n) - 91);
                }
            }
            if (charCodeAtPlus > 122) {
                if (charCodeAt >= 97  && charCodeAt <= 122) {
                    var charCodeAtPlus = 97 + ((array[i].charCodeAt(i) + n) - 123);
                }
            }
            // console.log("result >>> " , charCodeAtPlus);
        }
        if (isUpeer) {
            answer +=  String.fromCharCode(charCodeAtPlus).toUpperCase();
        } else {
            answer +=  String.fromCharCode(charCodeAtPlus);
        }
    }
    return answer;
}



function solution(s, n) {
    let result = "";
    for (let i=0; i<s.length;i++) {
        if ( s[i] == ' ' )
            result += ' '
        else
        console.log(s.charCodeAt(i));
            result += String.fromCharCode( (s.charCodeAt(i)>90)
                    ? (s.charCodeAt(i)+n-97)%26+97
                    : (s.charCodeAt(i)+n-65)%26+65 )
    }
    return result;
}

function solution(s, n) {
    let answer = "";

    answer = s.split("").map( a => {
        var code = a.charCodeAt(0);

        console.log("code >>> " , code);

        if (code === 32) {
            return " ";
        }

        // 대문자
        if (code >= 65 && code <= 90) {
            if (code + n > 90) {
                return String.fromCharCode(code + n -26);
            } else {
                return String.fromCharCode(code + n);
            }
        // 소문자
        } else if (code >= 97 && code <= 122) {
            if (code + n > 122) {
                return String.fromCharCode(code + n -26);
            } else {
                return String.fromCharCode(code + n);
            }
        }
    }).join("");

    return answer;
}