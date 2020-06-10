// 일반적인 프린터는 인쇄 요청이 들어온 순서대로 인쇄합니다.
// 그렇기 때문에 중요한 문서가 나중에 인쇄될 수 있습니다.
// 이런 문제를 보완하기 위해 중요도가 높은 문서를 먼저 인쇄하는 프린터를 개발했습니다.
// 이 새롭게 개발한 프린터는 아래와 같은 방식으로 인쇄 작업을 수행합니다.
// 1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
// 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
// 3. 그렇지 않으면 J를 인쇄합니다.
// 예를 들어, 4개의 문서(A, B, C, D)가 순서대로 인쇄 대기목록에 있고 중요도가 2 1 3 2 라면 C D A B 순으로 인쇄하게 됩니다.
// 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 알고 싶습니다. 위의 예에서 C는 1번째로, A는 3번째로 인쇄됩니다.
// 현재 대기목록에 있는 문서의 중요도가 순서대로 담긴 배열 priorities와 내가 인쇄를 요청한 문서가 현재 대기목록의 어떤 위치에 있는지를 알려주는 location이 매개변수로 주어질 때,
// 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 return 하도록 solution 함수를 작성해주세요.
// priorities	   location	return
// [2, 1, 3, 2]	     2	     1
// [1, 1, 9, 1, 1, 1]	0	5


function solution(priorities, location) {
    var list = priorities.map((t,i)=>({
        my : i === location,
        val : t
    }));
    console.log('list >>> ' , JSON.stringify(list));
    var count = 0;        
    while(true){
        var cur = list.splice(0,1)[0];        
        // console.log('list >>> ' , JSON.stringify(list));
        if(list.some(t=> t.val > cur.val )){
            list.push(cur);                        
            console.log('list >>> ' , JSON.stringify(list));
        }
        else{
            count++;
            if(cur.my) return count;
        }
    }
}

function solution(priorities, location) {
    var answer = 0;
    var array = [];
    answer = location;
    // answer= location + 1;
    while(priorities.length > 0) {
        var data = priorities.shift();
        if ( priorities.some((x)=> { if (x > data) return true;})) {
            priorities.push(data);
        } else {
            array.push(data);
        }
        console.log('array >>  ' , array);
    }
    if (location !== 0) {
        answer = answer + 1;

    } 
    return answer;
}
// function solution(priorities, location) {
//     var answer = 0;
//     var array = [];

//     answer= location;
//     while(priorities.length > 0) {
//         var data = priorities.shift();
//         if ( priorities.some((x)=> { if (x > standard) return true;})) {
//             priorities.push(data);
//             answer --;
//         } else {
//             array.push(data);
//         }
//         console.log('array >>  ' , array);
//     }
//     answer = answer + 1;
//     return answer;

//     for (var i=0; i < priorities.length; i++) {
//         array.push({
//             'prior' : priorities[i],
//             'index' : i
//         });
//     }
//     // console.log('array >>> ' , JSON.stringify(array));

//     for (var j = 0; j < array.length-1; j++) {  
//         if (array[0]["prior"] <= array[j+1]["prior"]) {
// //             array.shift();
//             array.push(array.shift());
//             // console.log('array 2222 >> ' , JSON.stringify(array));
//         } else {
//             // console.log('array 2222 nono >> ' , JSON.stringify(array[j]));

//         }
//     }

//     for (var k = 0; k < array.length; k++) {
//         if (array[k]["index"] === location) {
//             answer = k + 1;
//         }  

//     }
    // console.log('result array >> ' , JSON.stringify(array));
    // return answer;
// }