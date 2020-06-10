// <<<<< 제일 작은 수 제거 >>>>>
// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요.
// 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
// 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.
// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.
function solution(arr) {
    var answer = [];
    var x = 0;

    if (arr.length == 1) {
        answer = [-1];
    } else {
        x = arr.reduce((prev ,next) => {
            return Math.min(prev, next);
        });

        arr.splice(arr.indexOf(x), 1);
    }
    return arr;
}

function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1)return[-1];
    return arr;
}


function solution(arr) {
    // Array 함수 이용
    var min = arr.reduce((p, c) => Math.min(p,c))
    var r = arr.filter(v => v != min);
    r = r.length == 0 ? [-1] : r;
    console.log(r)
    return r;
}

