// 2016년 1월 1일은 금요일입니다. 
// 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 
// 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT
// 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 TUE를 반환하세요.

// 제한 조건
// 2016년은 윤년입니다.
// 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

function solution(a, b) {
    var answer = '';
    var dayArray = ['SUN' , 'MON', 'TUE', 'WED' , 'THU' , 'FRI' , 'SAT' ];
    // 윤년 => 2월이 29일까지 있음 (4년에 한번)
    var date = new Date(2016, a-1, b);
    answer = dayArray[date.getDay()];



    return answer;
}


// 문제가 개편 되었습니다. 이로 인해 함수 구성이 변경되어, 과거의 코드는 동작하지 않을 수 있습니다.
// 새로운 함수 구성을 적용하려면 [코드 초기화] 버튼을 누르세요. 단, [코드 초기화] 버튼을 누르면 작성 중인 코드는 사라집니다.
function getDayName(a,b){
  var date = new Date(2016, (a - 1), b);
    return date.toString().slice(0, 3).toUpperCase();
}

//아래 코드는 테스트를 위한 코드입니다.
console.log(getDayName(5,24));
