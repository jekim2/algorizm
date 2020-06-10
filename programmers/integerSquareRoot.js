// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// 제한 사항
// n은 1이상, 50000000000000 이하인 양의 정수입니다.

// 121	144
// 3	-1

function solution(n) {
    var answer = 0;
    for (var i = 1; i<= n  ; i ++ ){
        if (i * i === n) {
            answer = (i + 1) * (i + 1);
            break;
        }
    }

    answer == 0 ? answer = -1 : answer;

    return answer;
}

function nextSqaure(n){
    var result = 0;
    var x = 0;
    while (x*x < n){
      x++;
      console.log("x >>> ", x);
    }
    if (x*x == n){
      x++;
      result = x*x;
      console.log("x >>> ",result);
    }else{
      result = 'no';
    }
    return result;
}

function nextSqaure(n){
    //함수를 완성하세요
    switch(n % Math.sqrt(n)){
      case 0:
        return Math.pow(Math.sqrt(n) + 1, 2);
      default:
        return -1;
    }
}