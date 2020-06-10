// 문제 설명
// 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

// ()() 또는 (())() 는 올바른 괄호입니다.
// )()( 또는 (()( 는 올바르지 않은 괄호입니다.
// '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 문자열 s의 길이 : 100,000 이하의 자연수
// 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.

// ()()	true
// (())()	true
// )()(	false
// (()(	false

// function solution(s){
//     var answer = false;
//     var temp_array = [];
    
//     temp_array = s.split("");
//     if (temp_array[0] == ")" || s === "") return false;

//     const sliceString = (temp_array) => {

//         // console.log('temp_array ?? ' ,temp_array)
//         var sCnt = 0;
//         var eCnt = 0;

//         for (var i =0; i < temp_array.length; i++) {
//             temp_array[i] == "(" ? sCnt ++ : eCnt ++;

//             // 괄호가 쌍을 이룰 때
//             if(sCnt === eCnt) {
//                 answer = true;
//                 var u = temp_array.join("").slice(0, i+1);
//                 var v = temp_array.join("").slice(i+1, temp_array.length);
//                 if (u.substring(0,1) === ')') {
//                     answer = false;
//                     i = temp_array.length;
//                     return answer;
//                 } else {
//                     sliceString(v.split(""));
//                     break;
//                 }
//             }
//         }
//         return answer;
//     }

//     sliceString(temp_array);

//     // if (sCnt !== eCnt) answer =f alse;
//     return answer;
// }

// function solution(s) {
//     var answer = true;
//     var sCnt = 0;
//     var eCnt = 0;

//     var temp_array = s.split("");

//     if (temp_array[0] == ")" || s === "") return false;

//     for (var i =0; i < temp_array.length; i++) {
//         if (temp_array[i] == "(") sCnt ++;
//         else eCnt ++;
//     }
//     if (sCnt != eCnt) return false;

// }

function solution(s){
    var answer = false;
    var temp_array = [];
    
    temp_array = s.split("");
    if (temp_array[0] == ")" || s === "") return false;

    const sliceString = (temp_array) => {

        // console.log('temp_array ?? ' ,temp_array)
        var sCnt = 0;
        var eCnt = 0;

        for (var i =0; i < temp_array.length; i++) {
            temp_array[i] == "(" ? sCnt ++ : eCnt ++;

            // 괄호가 쌍을 이룰 때
            if(sCnt === eCnt) {
                answer = true;
                var u = temp_array.join("").slice(0, i+1);
                var v = temp_array.join("").slice(i+1, temp_array.length);
                if (u.substring(0,1) === ')') {
                    answer = false;
                    i = temp_array.length;
                    return answer;
                } else {
                    sliceString(v.split(""));
                    break;
                }
            }
        }
        return answer;
    }

    sliceString(temp_array);


    return answer;
}

// 효율적으로 하는 팁!!
// false인 조건만 생각해서 로직 짜고 나머지는 true로 해야함.
function solution(s) {

    var answer = true;
    var temp_array = s.split("");
    var cntL = 0;
    var cntR = 0;

    for (var i = 0; i < temp_array.length; i++) {
        if (temp_array[i] == ')') cntR++;
        else cntL++;

        if (cntL < cntR) return false;
    }

    if (cntR != cntL) return false;

    return answer;

}

solution('))');
// solution('(())()');
// solution('())(');

// if (temp_array[i] === ")") {
//     answer = false;
//     break;
// } else {
//     // 2개의 괄호 일 때
//     if(sCnt === eCnt) {
//         var u = temp_array.join("").slice(0, i+1);
//         var v = temp_array.join("").slice(i+1, temp_array.length);
//         answer = true;
//         sliceString(v.split(""));
//     }
// }

// (()(
    // for (var i = 0; i < s.length; i++) {
    //     // console.log('s>>>' , s[i]);
    //     if (i == 0 &&  s[i] == ")") {
    //         answer = false;
    //         break;
    //     }

    //     s[i] === "(" ? sCnt ++ : eCnt ++;

    //     if (s[i] === "(" && s[i+1] === ")") {
    //         s = s.slice(2, s.length);
    //     }
    //     console.log('s >> ' , s);
    //     // s = s.slice()
    // }
    // if (sCnt !== eCnt) answer = false;
    // console.log('answer >> ' , answer);