/**핸드폰 번호 가리기 */
// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// s는 길이 4 이상, 20이하인 문자열입니다.

// phone_number	return
// 01033334444	*******4444
// 027778888	*****8888

// function solution(phone_number) {
//     var answer = '';
//     var answer = String(phone_number).split("").slice(phone_number.length, -4);
//     // String(phone_number).slice(phone_number.length, -4);
//     console.log("phone_nmuber >>> "  , answer);
//     return answer;
// }


// function solution(phone_number) {
//     var answer = '';
//     var answer = String(phone_number).split("").slice(phone_number.length, -4);
//     // String(phone_number).slice(phone_number.length, -4);
//     console.log("phone_nmuber >>> "  , answer);
//     return answer;
// }

function solution(phone_number) {
    var answer = '';
    var array = [];
    // answer =  phone_number.substring(phone_number.length , -4);
    var x= phone_number.substr(phone_number.length-4 , 4);
    var y = phone_number.substr(0 , phone_number.length-4);
    // console.log("x >>> " ,x);
    // console.log("y >>> " ,y);
    // array = String(phone_number).split("");
    for(var i = 0; i<y.length + 1; i++){
        answer += "*";
    }
    // console.log("answer >>  " , answer);
    answer = answer + x;
    // console.log("answer result>>  " , answer);
    return answer;
}

function hide_numbers(s){
    var result = "*".repeat(s.length - 4) + s.slice(-4);
    //함수를 완성해주세요
    return result;
}