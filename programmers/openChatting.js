// 오픈채팅방
// 문제 설명
// 오픈채팅방
// 카카오톡 오픈채팅방에서는 친구가 아닌 사람들과 대화를 할 수 있는데, 본래 닉네임이 아닌 가상의 닉네임을 사용하여 채팅방에 들어갈 수 있다.
// 신입사원인 김크루는 카카오톡 오픈 채팅방을 개설한 사람을 위해, 다양한 사람들이 들어오고, 나가는 것을 지켜볼 수 있는 관리자창을 만들기로 했다. 채팅방에 누군가 들어오면 다음 메시지가 출력된다.
// [닉네임]님이 들어왔습니다.
// 채팅방에서 누군가 나가면 다음 메시지가 출력된다.
// [닉네임]님이 나갔습니다.
// 채팅방에서 닉네임을 변경하는 방법은 다음과 같이 두 가지이다.
// 채팅방을 나간 후, 새로운 닉네임으로 다시 들어간다.
// 채팅방에서 닉네임을 변경한다.
// 닉네임을 변경할 때는 기존에 채팅방에 출력되어 있던 메시지의 닉네임도 전부 변경된다.

// 예를 들어, 채팅방에 Muzi와 Prodo라는 닉네임을 사용하는 사람이 순서대로 들어오면 채팅방에는 다음과 같이 메시지가 출력된다.

// Muzi님이 들어왔습니다.
// Prodo님이 들어왔습니다.

// 채팅방에 있던 사람이 나가면 채팅방에는 다음과 같이 메시지가 남는다.

// Muzi님이 들어왔습니다.
// Prodo님이 들어왔습니다.
// Muzi님이 나갔습니다.

// Muzi가 나간후 다시 들어올 때, Prodo 라는 닉네임으로 들어올 경우 기존에 채팅방에 남아있던 Muzi도 Prodo로 다음과 같이 변경된다.

// Prodo님이 들어왔습니다.
// Prodo님이 들어왔습니다.
// Prodo님이 나갔습니다.
// Prodo님이 들어왔습니다.

// 채팅방은 중복 닉네임을 허용하기 때문에, 현재 채팅방에는 Prodo라는 닉네임을 사용하는 사람이 두 명이 있다. 이제, 채팅방에 두 번째로 들어왔던 Prodo가 Ryan으로 닉네임을 변경하면 채팅방 메시지는 다음과 같이 변경된다.

// Prodo님이 들어왔습니다.
// Ryan님이 들어왔습니다.
// Prodo님이 나갔습니다.
// Prodo님이 들어왔습니다.

// 채팅방에 들어오고 나가거나, 닉네임을 변경한 기록이 담긴 문자열 배열 record가 매개변수로 주어질 때, 모든 기록이 처리된 후, 최종적으로 방을 개설한 사람이 보게 되는 메시지를 문자열 배열 형태로 return 하도록 solution 함수를 완성하라.

// 제한사항
// record는 다음과 같은 문자열이 담긴 배열이며, 길이는 1 이상 100,000 이하이다.
// 다음은 record에 담긴 문자열에 대한 설명이다.
// 모든 유저는 [유저 아이디]로 구분한다.
// [유저 아이디] 사용자가 [닉네임]으로 채팅방에 입장 - Enter [유저 아이디] [닉네임] (ex. Enter uid1234 Muzi)
// [유저 아이디] 사용자가 채팅방에서 퇴장 - Leave [유저 아이디] (ex. Leave uid1234)
// [유저 아이디] 사용자가 닉네임을 [닉네임]으로 변경 - Change [유저 아이디] [닉네임] (ex. Change uid1234 Muzi)
// 첫 단어는 Enter, Leave, Change 중 하나이다.
// 각 단어는 공백으로 구분되어 있으며, 알파벳 대문자, 소문자, 숫자로만 이루어져있다.
// 유저 아이디와 닉네임은 알파벳 대문자, 소문자를 구별한다.
// 유저 아이디와 닉네임의 길이는 1 이상 10 이하이다.
// 채팅방에서 나간 유저가 닉네임을 변경하는 등 잘못 된 입력은 주어지지 않는다.
// 입출력 예
// record	result
// ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]
// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
// 입출력 예 설명
// 입출력 예 #1
// 문제의 설명과 같다.

// function solution(record) {
//     var answer = [];

//     var temp_obj = {};
//     for (var i =0; i< record.length; i++) {
//         // console.log('record >> ' , record[i]);
//         var temp_array = record[i].split(" ");
//         // console.log('temp_array >> ' , temp_array);

//         if (temp_array.length === 3) {
//             temp_obj[temp_array[1]] = temp_array[2];
//         }
//     }
//     // console.log('temp_obj >> ' , temp_obj);

//     for (var i=0; i< record.length; i++) {
//         var temp_array = record[i].split(" ");
//         if (temp_array[0] === "Enter") {
//             answer.push(temp_obj[temp_array[1]] + "님이 들어왔습니다.");
//         } else if (temp_array[0] == "Change") {
//             answer.push( temp_obj[temp_array[1]]+ "님이 나갔습니다.");
//         }
//     }

//     // console.log('answer >> ' , answer);

// }

// function solution(record) {
//     var answer = [];

//     var temp_obj = {};
//     for (var i =0; i< record.length; i++) {
//         // console.log('record >> ' , record[i]);
//         var temp_array = record[i].split(" ");
//         // console.log('temp_array >> ' , temp_array);

//         if (temp_array.length === 3) {
//             temp_obj[temp_array[1]] = temp_array[2];
//         }
//     }
//     // console.log('temp_obj >> ' , temp_obj);

//     for (var i=0; i< record.length; i++) {
//         var temp_array = record[i].split(" ");
//         if (temp_array[0] === "Enter") {
//             answer.push(temp_obj[temp_array[1]] + "님이 들어왔습니다.");
//         } else if (temp_array[0] == "Leave") {
//             answer.push( temp_obj[temp_array[1]]+ "님이 나갔습니다.");
//         }
//     }
//     console.log('answer >> ' , answer);
//     return answer;

// // 
// }

function solution(record) {
    const userInfo = {};
    const action = [];
    const stateMapping = {
        'Enter': '님이 들어왔습니다.',
        'Leave': '님이 나갔습니다.'
    }

    record.forEach((v) => {
        const [state, id, nick] = v.split(' ');

        if(state !== "Change") {
            action.push([state, id]);
        }

        if(nick) {
            userInfo[id] = nick;
        }
    })

    return action.map(([state, uid]) => {
        return `${userInfo[uid]}${stateMapping[state]}`;    
    })
}

solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]);

// function solution(record) {
//     var answer = [];
//     var temp_data = [];
//     for (var i =0; i< record.length; i++) {
//         var record_detail = record[i].split(" ");
//         // temp_data.push(record_detail)
//         console.log(record_detail);
//         // temp_data.map((x, idx) => {
//         //     if (temp_data[idx][1].indexOf(record_detail[1]) > -1) {
//         //         temp_data[idx][2] = record_detail[2];
//         //     }
//         //     // if ( temp_data[idx][0] == "Enter") {
//         //     //     answer.push(temp_data[i][2] + "님이 들어왔습니다.");
//         //     // } else if ( temp_data[idx][0] == "Leave") {
//         //     //     answer.push( temp_data[i][2] + "님이 나갔습니다.");
//         //     // }
//         // });
//     // if (record_detail[0] === "Change" ) {
//         //     temp_data.splice(i,1);
//         // }
//         // console.log('temp_data >> ' , temp_data);
//     }

//     // for (var i =0; i< temp_data.length; i++) {
//     //     if ( temp_data[i][0] == "Enter") {
//     //         answer.push(temp_data[i][2] + "님이 들어왔습니다.");
//     //     } else if ( temp_data[i][0] == "Leave") {
//     //         answer.push( temp_data[i][2] + "님이 나갔습니다.");
//     //     }
//     // }


//     console.log('answer >> ' , answer);



//     return answer;

// }

// function solution(record) {
//     var answer = [];

//     record.map((x, i) => {
//         record[i] = record[i].split(" ");
//     })

//     for (var i =0; i< record.length; i++) {
//         answer.push(record[i]);
//         for (var j =0 ;j< record.length; j++) {


//             answer.map((x, idx) => {
//                 if (answer[idx][1].indexOf(record[i][1]) > -1) {
//                     answer[idx][2] = record[i][2];
                   
//                 }
//             });
//          /*    // 이름변경
//             if (record[i][0] === "Change"){
//                 // console.log('Change answer >> ' , answer);
//                 answer.map((x, idx) => {
//                     if (answer[idx][1].indexOf(record[i][1]) > -1) {
//                         answer[idx][2] = record[i][2];
//                     }
//                 });
//                 // console.log(record[i]);
//                 // record.splice(i,1);
//             } else if (record[i][0] === "Enter"){
//                 answer.map((x, idx) => {
//                     if (answer[idx][1].indexOf(record[i][1]) > -1) {
//                         answer[idx][2] = record[i][2];
//                     }
//                 });
//                 // 떠남
//             } else {
//                 answer.map((x, idx) => {
//                     if (answer[idx][1].indexOf(record[i][1]) > -1) {
//                         answer[idx][2] = record[i][2];
//                     }
//                 });
//             } */
//         }
//         if (record[i][0] === "Change"){
//             answer.splice(i,1);
//         }
//     }

//     console.log('answer >> ' , answer);


//     var result_data = [];
//     for (var i =0; i< answer.length; i++) {
//         if ( answer[i][0] == "Enter") {
//             result_data.push(answer[i][2] + "님이 들어왔습니다.");
//         } else if ( answer[i][0] == "Leave") {
//             result_data.push( answer[i][2] + "님이 나갔습니다.");
//         }
//     }

//     console.log('result_data >> ' , result_data);

//     return result_data;
// }

// ["Enter uid1234 Muzi",
    // "Enter uid4567 Prodo",
    // "Leave uid1234",
    // "Enter uid1234 Prodo",
    // "Change uid4567 Ryan"]

