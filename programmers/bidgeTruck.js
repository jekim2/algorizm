// 트럭 여러 대가 강을 가로지르는 일 차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 트럭은 1초에 1만큼 움직이며, 다리 길이는 bridge_length이고 다리는 무게 weight까지 견딥니다.
// ※ 트럭이 다리에 완전히 오르지 않은 경우, 이 트럭의 무게는 고려하지 않습니다.

// 예를 들어, 길이가 2이고 10kg 무게를 견디는 다리가 있습니다.
// 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.
// 경과 시간	다리를 지난 트럭	다리를 건너는 트럭	대기 트럭
// 0	        []	                []	            [7,4,5,6]
// 1~2	        []	                [7]	            [4,5,6]
// 3	        [7]	                [4]	            [5,6]
// 4	[7]	[4,5]	[6]
// 5	[7,4]	[5]	[6]
// 6~7	[7,4,5]	[6]	[]
// 8	[7,4,5,6]	[]	[]
// 따라서, 모든 트럭이 다리를 지나려면 최소 8초가 걸립니다.

// solution 함수의 매개변수로 다리 길이 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭별 무게 truck_weights가 주어집니다.
//  이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.

// 제한 조건
// bridge_length는 1 이상 10,000 이하입니다.
// weight는 1 이상 10,000 이하입니다.
// truck_weights의 길이는 1 이상 10,000 이하입니다.
// 모든 트럭의 무게는 1 이상 weight 이하입니다.
// 입출력 예
// bridge_length	weight	truck_weights	return
// 2	            10	     [7,4,5,6]	      8
// 100	            100	     [10]	        101
// 100	            100	     [10,10,10,10,10,10,10,10,10,10]	110
// 출처

function solution(bridge_length, weight, truck_weights) {
    var answer = 0;          // 경과 시간
    var passing_truck = [];  // 다리를 지나는 중 트럭
    var passed_truck = [];   // 다리를 지난 트럭
    var passed_weight = 0;

    passing_truck.push(truck_weights.shift());
    answer ++;

    while(truck_weights.length > 0 || passed_truck.length > 0) {
      // var sum = passing_truck.reduce((a,b)=> a + b);  // 7
      // if (passed_weight + passing_truck[0] <= weight){ 

      // }



    }

  }


//    solution(bridge_length, weight, truck_weights) {
//      var answer = 0;          // 경과 시간
//      var passing_truck = [];  // 다리를 지나는 중 트럭
//      var passed_truck = [];   // 다리를 지난 트럭




//     //  var passing_truck = [];

//     // var passing_truck = new Array(bridge_length);

//     // console.log('passint_truck >> ' , passing_truck);

//     // for (var i=0; i< truck_weights.length; i++) {
//     //     var data = truck_weights.shift();
//     //     data
//     // }
//     // passing_truck.push(truck_weights.shift());       //  [7]
//     // var passing_truck = new Array(bridge_length);
//     // passing_truck[bridge_length-1] = truck_weights.shift();
//     // answer ++;

//     // console.log('passing_truck >> ' , passing_truck); // [empty, 7]

//     // // truck_weights 의 길이 가 0이상일 때 까지
//     // while(truck_weights.length > 0) {
      
//     //   for (var i=0; i< truck_weights.length; i++) {     // [4,5,6]
//     //     var sum = passing_truck.reduce((a,b)=> a + b);  // 7
//     //       if (sum + truck_weights[i] <= weight){        // 11
//     //         answer ++;
            

//     //       } else {
//     //         for (var i=0; i< passing_truck.length; i++){
//     //           if (truck_weights.shift() !== undefined) {
//     //             answer ++;
//     //           } else {
//     //             var passing_truck = new Array(bridge_length);
//     //             passing_truck[bridge_length-1] = truck_weights.shift();
//     //             answer ++;
//     //             break;
//     //           }
//     //         }
//     //       }
//     //     }
//     // }
//     // return answer;
// }

function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    // var passing_truck = new Array(bridge_length);

    // console.log('passint_truck >> ' , passing_truck);

    // for (var i=0; i< truck_weights.length; i++) {
    //     var data = truck_weights.shift();
    //     data
    // }
    var passing_truck = [];
    // truck_weights 의 길이 가 0이상일 때 까지
    while(truck_weights.length > 0) {
        var data = truck_weights.shift();
        // truck_weights.push(data); [7]
        answer ++;
        var sum = passing_truck.reduce((a,b)=> a + b);  // 7

        

        // //     // var sum = passing_truck.reduce((a,b)=> a + b);



    // //     // 트럭무게에 있는 걸 한 칸 씩 옮기자
    // //     // passing_truck.push(data);           // passing_truck = [7]
    // //     //     // passing_truck의 무게의 합이  <= weight
    // //     //     if (sum <= weight) {

    // //     //     } else {

    // //     //     }

    // //         // passing_truck의 무게의 합이 크냐
    // //      //
    // //     // passing_truck
    }
    // return answer;
}