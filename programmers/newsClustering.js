// [1차] 뉴스 클러스터링
// 문제 설명
// 뉴스 클러스터링
// 여러 언론사에서 쏟아지는 뉴스, 특히 속보성 뉴스를 보면 비슷비슷한 제목의 기사가 많아 정작 필요한 기사를 찾기가 어렵다
//  Daum 뉴스의 개발 업무를 맡게 된 신입사원 튜브는 사용자들이 편리하게 다양한 뉴스를 찾아볼 수 있도록 문제점을 개선하는 업무를 맡게 되었다.

// 개발의 방향을 잡기 위해 튜브는 우선 최근 화제가 되고 있는 카카오 신입 개발자 공채 관련 기사를 검색해보았다.

// 카카오 첫 공채..'블라인드' 방식 채용
// 카카오, 합병 후 첫 공채.. 블라인드 전형으로 개발자 채용
// 카카오, 블라인드 전형으로 신입 개발자 공채
// 카카오 공채, 신입 개발자 코딩 능력만 본다
// 카카오, 신입 공채.. 코딩 실력만 본다
// 카카오 코딩 능력만으로 2018 신입 개발자 뽑는다
// 기사의 제목을 기준으로 블라인드 전형에 주목하는 기사와 코딩 테스트에 주목하는 기사로 나뉘는 걸 발견했다.
//  튜브는 이들을 각각 묶어서 보여주면 카카오 공채 관련 기사를 찾아보는 사용자에게 유용할 듯싶었다.

// 유사한 기사를 묶는 기준을 정하기 위해서 논문과 자료를 조사하던 튜브는 자카드 유사도라는 방법을 찾아냈다.

// 자카드 유사도는 집합 간의 유사도를 검사하는 여러 방법 중의 하나로 알려져 있다. 두 집합 A, B 사이의 자카드 유사도 J(A, B)는 두 집합의 교집합 크기를 두 집합의 합집합 크기로 나눈 값으로 정의된다.

// 예를 들어 집합 A = {1, 2, 3}, 집합 B = {2, 3, 4}라고 할 때, 교집합 A ∩ B = {2, 3}, 합집합 A ∪ B = {1, 2, 3, 4}이 되므로,
// 집합 A, B 사이의 자카드 유사도 J(A, B) = 2/4 = 0.5가 된다. 집합 A와 집합 B가 모두 공집합일 경우에는 나눗셈이 정의되지 않으니 따로 J(A, B) = 1로 정의한다.

// 자카드 유사도는 원소의 중복을 허용하는 다중집합에 대해서 확장할 수 있다. 다중집합 A는 원소 1을 3개 가지고 있고, 다중집합 B는 원소 1을 5개 가지고 있다고 하자. 이 다중집합의 교집합 A ∩ B는 원소 1을 min(3, 5)인 3개, 합집합 A ∪ B는 원소 1을 max(3, 5)인 5개 가지게 된다. 
// 다중집합 A = {1, 1, 2, 2, 3}, 다중집합 B = {1, 2, 2, 4, 5}라고 하면, 교집합 A ∩ B = {1, 2, 2}, 합집합 A ∪ B = {1, 1, 2, 2, 3, 4, 5}가 되므로, 자카드 유사도 J(A, B) = 3/7, 약 0.42가 된다.

// 이를 이용하여 문자열 사이의 유사도를 계산하는데 이용할 수 있다. 문자열 FRANCE와 FRENCH가 주어졌을 때, 이를 두 글자씩 끊어서 다중집합을 만들 수 있다. 각각 {FR, RA, AN, NC, CE}, {FR, RE, EN, NC, CH}가 되며, 교집합은 {FR, NC}, 합집합은 {FR, RA, AN, NC, CE, RE, EN, CH}가 되므로, 두 문자열 사이의 자카드 유사도 J("FRANCE", "FRENCH") = 2/8 = 0.25가 된다.

// 입력 형식
// 입력으로는 str1과 str2의 두 문자열이 들어온다. 각 문자열의 길이는 2 이상, 1,000 이하이다.
// 입력으로 들어온 문자열은 두 글자씩 끊어서 다중집합의 원소로 만든다. 이때 영문자로 된 글자 쌍만 유효하고, 기타 공백이나 숫자, 특수 문자가 들어있는 경우는 그 글자 쌍을 버린다. 예를 들어 ab+가 입력으로 들어오면, ab만 다중집합의 원소로 삼고, b+는 버린다.
// 다중집합 원소 사이를 비교할 때, 대문자와 소문자의 차이는 무시한다. AB와 Ab, ab는 같은 원소로 취급한다.
// 출력 형식
// 입력으로 들어온 두 문자열의 자카드 유사도를 출력한다. 유사도 값은 0에서 1 사이의 실수이므로, 이를 다루기 쉽도록 65536을 곱한 후에 소수점 아래를 버리고 정수부만 출력한다.

// 예제 입출력
// str1 	str2	answer
// FRANCE	french	16384
// handshake	shake hands	65536
// aa1+aa2	AAAA12	43690
// E=M*C^2	e=m*c^2	65536

function solution(str1, str2) {
    var answer = 0;
    var str1_temp = [];
    var str2_temp = [];

    // 두글자씩 다중집합 만들기
    const makeData = (str) => {
        var temp_array = [];
        for (var i =0 ; i<str.length-1; i++) {
            var data = str.substring(i, i+2);
            var tempData = data.toUpperCase().split("");
            if (tempData[0] !== " " && tempData[1] !== " ") {
                // console.log('tempData >> ' ,  tempData[1]);
                var pattern_eng = /[A-Z]/;	// 문자
                if (pattern_eng.test(tempData[0]) && pattern_eng.test(tempData[1])) {
                    temp_array.push(str.substring(i, i+2).toUpperCase());
                }
            }
        }
        return temp_array;
    };

    str1_temp = makeData(str1);
    str2_temp = makeData(str2);

    str1_temp.sort((a,b) => a-b);
    str2_temp.sort((a,b)=> a-b);

    var max_array = [];
    var min_array = [];
    let difference = [];
    let plus = [];


    if ( str1_temp.length >= str2_temp.length) {
        max_array = str1_temp ;
        min_array = str2_temp;
    } else {
        max_array = str2_temp;
        min_array = str1_temp;
    }

    // 교집합 구해준다.
    for (var i =0 ;i < max_array.length; i++) {
        if (min_array.indexOf(max_array[i]) > -1) {
            difference.push(min_array.splice(min_array.indexOf(max_array[i]) , 1))
        }
        plus.push(max_array[i]);
    }

    for (var i = 0; i < min_array.length; i++) { // ***합집합에 arr1 차집합 넣어주기
        plus.push(min_array[i])
    };

    if (plus.length == 0) return 65536;
    if (difference.length == 0) return 0;
    answer =  Math.floor((difference.length /  plus.length ) * 65536);
    return answer;
}

solution("E=M*C^2", "e=m*c^2");
// solution("handshake" ,"shake hands")
// solution("aa1+aa2" ,"AAAA12")
[1,2,4,4,4] [4,4,5,6,7,8,8]














    // var totalArray = [];

    // for (var i =0 ;i < max_array.length; i++) {
    //     for (var j=0 ; j < min_array.length; j++) {
    //         if (max_array[i] === min_array[j]) {
    //             difference.push(max_array[i]);
    //             max_array.splice(i, 1);
    //             min_array.splice(j, 1);
    //             i -= 1;
    //             j -= 1;
    //         }
    //     }
    //     // if (min_array.indexOf(max_array[i]) > -1) {
    //     //     difference.push(max_array[i]);
    //     //     max_array.splice(i, 1);
    //     //     i -= 1;
    //     // }
    // }
    // console.log('difference ' , difference);
    // console.log('max_array ' , max_array);
    // console.log('min_array ' , min_array);

    // max_array = max_array.concat(difference);
    // min_array = min_array.concat(difference);

    // // max_array.concat(min_array).filter((x) => max_array.includes(x));
    // // max_array = max_array.concat(difference);

    // console.log('max_array 2222 ' , max_array);
    // console.log('min_array 2222 ' , min_array);

    // for (var i =0 ; i<max_array.length; i++) {
    //     min_array[i]
    // }
    // var totalArray = max_array.concat(min_array);

    
    // totalArray.sort((a,b) => a-b);
    // var minArray = [];
    // console.log('totalArray >> ' , totalArray);

    // for (var i = 0; i< totalArray.length; i++) {
    //     for (var j =0; j < difference.length; j++) {
    //         if (totalArray[i] == difference[j]) {
    //             totalArray.splice(i,1);
    //             minArray.push(difference.splice(j,1));
    //             j -= 1;
    //             i -= 1;
    //         }
    //     }
    // }

    // minArray = minArray.join("").split("");
    // console.log('totalArray 222>> ' , totalArray);
    // console.log('minArray 222>> ' , minArray);


    // difference = difference.concat

//     var min_array = [];
// for (var i =0; i< str1_temp.length; i++){
//    if (str2_temp.indexOf(str1_temp[i]) > -1) {
//         min_array.push(str1_temp[i]);
//         str2_temp.shift();
//     } 
// }

    // for (var i =0; i< min_array.length; i++){
    //     if (max_array.indexOf(min_array[i]) > -1) {
    //         difference.push(min_array[i]);
    //         max_array.shift();
    //     } 
    // }

    // console.log('difference >> ' , difference);


    // let plus_array = max_array.filter(x => !min_array.includes(x)) .concat(min_array.filter(x => !max_array.includes(x))); // 결과 1, 4, 5

    // console.log('plus_array >> ' , plus_array);
    // // var temp_array = [];

    // // max_array = difference.concat(max_array).filter((x) => );

    // console.log('max_array 111 >> ' , max_array);

    // for (var j = 0; j< min_array.length ; j ++) {
    //    if ( max_array.indexOf(min_array[j]) == -1) {
    //     max_array.push(min_array[j])
    //    }
    // }
    // max_array = max_array.concat(difference);
// function solution(str1, str2) {
//     var answer = 0;
//     var str1_temp = [];
//     var str2_temp = [];

//     // 두글자씩 다중집합 만들기
//     const makeData = (str) => {
//         var temp_array = [];
//         for (var i =0 ; i<str.length-1; i++) {
//             var data = str.substring(i, i+2);
//             var tempData = data.toUpperCase().split("");
//             if (tempData[0] !== " " && tempData[1] !== " ") {
//                 // console.log('tempData >> ' ,  tempData[1]);
//                 var pattern_eng = /[A-Z]/;	// 문자
//                 if (pattern_eng.test(tempData[0]) && pattern_eng.test(tempData[1])) {
//                     temp_array.push(str.substring(i, i+2).toUpperCase());
//                 }
//             }
//         }
//         return temp_array;
//     };

//     str1_temp = makeData(str1);
//     str2_temp = makeData(str2);

//     console.log('str1_temp >> ' , str1_temp);
//     console.log('str2_temp >> ' , str2_temp);

//     // str1_temp = [1,2,4,4,4];
//     // str2_temp = [4,4,5,6,7,8,8];

//     str1_temp.sort((a,b) => a-b);
//     str2_temp.sort((a,b)=> a-b);

//     var max_array = [];
//     var min_array = [];
//     let difference = [];

//     // list1={1,2,4,4,4} , list2={4,4,5,6,7,8,8}


//     if ( str1_temp.length >= str2_temp.length) {
//         max_array = str1_temp ;
//         min_array = str2_temp;
//     } else {
//         max_array = str2_temp;
//         min_array = str1_temp;
//     }
//     // difference = min_array.filter(x => max_array.includes(x)); // 결과 2, 3

//     // for (var i =0 ;i < max_array.length; i++) {
//     //     if (min_array.indexOf (max_array[i]) > -1) {
//     //         difference.push(max_array[i]);
//     //         max_array.splice(i,1);
//     //         console.log('??? ' , max_array);
//     //     }
//     // }

// //     var min_array = [];
// // for (var i =0; i< str1_temp.length; i++){
// //    if (str2_temp.indexOf(str1_temp[i]) > -1) {
// //         min_array.push(str1_temp[i]);
// //         str2_temp.shift();
// //     } 
// // }

//     for (var i =0; i< min_array.length; i++){
//         if (max_array.indexOf(min_array[i]) > -1) {
//             difference.push(min_array[i]);
//             max_array.shift();
//         } 
//     }

//     console.log('difference >> ' , difference);
   
//     console.log('max_array 111 >>' , max_array);

//     // let plus_array = max_array.filter(x => !min_array.includes(x)) .concat(min_array.filter(x => !max_array.includes(x))); // 결과 1, 4, 5

//     // console.log('plus_array >> ' , plus_array);
//     // var temp_array = [];

//     for (var j = 0; j< min_array.length ; j ++) {
//        if ( max_array.indexOf(min_array[j]) == -1) {
//         max_array.push(min_array[j])
//        }
//     }
//     max_array = max_array.concat(difference);

//     console.log('max_array 222>>' ,max_array);

//     if (max_array.length == 0) return 65536;
//     if (difference.length == 0) return 0;
//     answer =  Math.floor((difference.length /  max_array.length ) * 65536);
//     console.log('answer >>' , answer);
//     return answer;
// }
// solution("FRANCE", "french");
// solution("aa1+aa2" , "AAAA12");
// solution("E=M*C^2" , "e=m*c^2");
// solution("FRANCE" , "e=m*c^2");


// function solution(str1, str2) {
//     var answer = 0;
//     var str1_temp = [];
//     var str2_temp = [];

//     // 두글자씩 다중집합 만들기
//     const makeData = (str) => {
//         var temp_array = [];
//         for (var i =0 ; i<str.length-1; i++) {
//             var data = str.substring(i, i+2);
//             var tempData = data.toUpperCase().split("");
//             if (tempData[0] !== " " && tempData[1] !== " ") {
//                 // console.log('tempData >> ' ,  tempData[1]);
//                 var pattern_eng = /[A-Z]/;	// 문자
//                 if (pattern_eng.test(tempData[0]) && pattern_eng.test(tempData[1])) {
//                     temp_array.push(str.substring(i, i+2).toUpperCase());
//                 }
//             }
//         }
//         return temp_array;
//     };

//     str1_temp = makeData(str1);
//     str2_temp = makeData(str2);

//     console.log('str1_temp >> ' , str1_temp);
//     console.log('str2_temp >> ' , str2_temp);



//     var max_array = [];
//     var min_array = [];

//     // list1={1,2,4,4,4} , list2={4,4,5,6,7,8,8}

//     // str1_temp = [1,2,4,4,4];
//     // str2_temp = [4,4,5,6,7,8,8];

//     if ( str1_temp.length >= str2_temp.length) {
//         max_array = str1_temp ;
//         min_array = str2_temp;
//     } else {
//         max_array = str2_temp ;
//         min_array = str1_temp;
//     }

//     let difference = min_array.filter(x => max_array.includes(x)); // 결과 2, 3

//     console.log('difference >> ' , difference);

//     // let plus_array = max_array.filter(x => !min_array.includes(x)) .concat(min_array.filter(x => !max_array.includes(x))); // 결과 1, 4, 5

//     // console.log('plus_array >> ' , plus_array);
//     // var temp_array = [];

//     for (var j = 0; j< min_array.length ; j ++) {
//        if ( max_array.indexOf(min_array[j]) == -1) {
//         max_array.push(min_array[j])
//        }
//     }

//     console.log('max_array >>' ,max_array);
//     if (difference.length == 0) return 0;
//     if (max_array.length == 0) return 65536;
//     answer =  Math.floor((difference.length /  max_array.length ) * 65536);
//     console.log('answer >>' , answer);
//     return answer;
// }
// // solution("aa1+aa2" , "AAAA12");
// solution("E=M*C^2" , "e=m*c^2");
// // solution("FRANCE" , "e=m*c^2");
// // solution("fr" , "fraa");
// // solution("FRANCE" , "FRENCH");