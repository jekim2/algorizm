// [3차] 파일명 정렬
// 문제 설명
// 파일명 정렬
// 세 차례의 코딩 테스트와 두 차례의 면접이라는 기나긴 블라인드 공채를 무사히 통과해 카카오에 입사한 무지는 파일 저장소 서버 관리를 맡게 되었다.
// 저장소 서버에는 프로그램의 과거 버전을 모두 담고 있어, 이름 순으로 정렬된 파일 목록은 보기가 불편했다.
// 파일을 이름 순으로 정렬하면 나중에 만들어진 ver-10.zip이 ver-9.zip보다 먼저 표시되기 때문이다.
// 버전 번호 외에도 숫자가 포함된 파일 목록은 여러 면에서 관리하기 불편했다. 예컨대 파일 목록이 [img12.png, img10.png, img2.png, img1.png]일 경우, 일반적인 정렬은 [img1.png, img10.png, img12.png, img2.png] 순이 되지만, 숫자 순으로 정렬된 [img1.png, img2.png, img10.png, img12.png"] 순이 훨씬 자연스럽다.
// 무지는 단순한 문자 코드 순이 아닌, 파일명에 포함된 숫자를 반영한 정렬 기능을 저장소 관리 프로그램에 구현하기로 했다.
// 소스 파일 저장소에 저장된 파일명은 100 글자 이내로, 영문 대소문자, 숫자, 공백(" ), 마침표(.), 빼기 부호(-")만으로 이루어져 있다. 파일명은 영문자로 시작하며, 숫자를 하나 이상 포함하고 있다.
// 파일명은 크게 HEAD, NUMBER, TAIL의 세 부분으로 구성된다.
// HEAD는 숫자가 아닌 문자로 이루어져 있으며, 최소한 한 글자 이상이다.
// NUMBER는 한 글자에서 최대 다섯 글자 사이의 연속된 숫자로 이루어져 있으며, 앞쪽에 0이 올 수 있다. 0부터 99999 사이의 숫자로, 00000이나 0101 등도 가능하다.
// TAIL은 그 나머지 부분으로, 여기에는 숫자가 다시 나타날 수도 있으며, 아무 글자도 없을 수 있다.
// 파일명	HEAD	NUMBER	TAIL
// foo9.txt	foo	9	.txt
// foo010bar020.zip	foo	010	bar020.zip
// F-15	F-	15	(빈 문자열)
// 파일명을 세 부분으로 나눈 후, 다음 기준에 따라 파일명을 정렬한다.

// 무지를 도와 파일명 정렬 프로그램을 구현하라.

// 입력 형식
// 입력으로 배열 files가 주어진다.

// files는 1000 개 이하의 파일명을 포함하는 문자열 배열이다.
// 각 파일명은 100 글자 이하 길이로, 영문 대소문자, 숫자, 공백(" ), 마침표(.), 빼기 부호(-")만으로 이루어져 있다. 파일명은 영문자로 시작하며, 숫자를 하나 이상 포함하고 있다.
// 중복된 파일명은 없으나, 대소문자나 숫자 앞부분의 0 차이가 있는 경우는 함께 주어질 수 있다. (muzi1.txt, MUZI1.txt, muzi001.txt, muzi1.TXT는 함께 입력으로 주어질 수 있다.)
// 출력 형식
// 위 기준에 따라 정렬된 배열을 출력한다.

// 입출력 예제
// 입력: [img12.png, img10.png, img02.png, img1.png, IMG01.GIF, img2.JPG]
// 출력: [img1.png, IMG01.GIF, img02.png, img2.JPG, img10.png, img12.png]

// 입력: [F-5 Freedom Fighter, B-50 Superfortress, A-10 Thunderbolt II, F-14 Tomcat]
// 출력: [A-10 Thunderbolt II, B-50 Superfortress, F-5 Freedom Fighter, F-14 Tomcat]

// function solution(files) {
//     let answer = [];
//     //HEAD, NUMBER, TAIL 구분
//     //NUMBER를 기준으로 앞/뒤 구분 search(정규식)
//     let len = files.length;
//     const reg = /(\d+)/g;           //숫자가 1개이상 매칭되는 전체 정규식(메모리 고려)
//     for (let i = 0; i < len; i++) {
//         console.log(files[i].split(reg));
//       answer.push({ index: i, value: files[i].split(reg) }); //[{index:0~n, value:[HEAD, NUMBER, TAIL]}]
//     }

//     //sort의 0은 유지 but ECMAscript 명세에 따라 보장은 하지않음(index로 순서보장)
//     answer.sort((a, b) => {
//       //HEAD의 값을 비교
//       const a_head = a.value[0].toLowerCase();
//       const b_head = b.value[0].toLowerCase();
//       if (a_head < b_head) return -1;
//       else if (a_head > b_head) return 1;
//       else {
//         //HEAD가 같은경우 NUMBER를 비교
//         const a_number = Number(a.value[1]); //Number로 앞의 0을 제거
//         const b_number = Number(b.value[1]);
//         if (a_number > b_number) return 1;
//         else if (a_number < b_number) return -1;
//         else {
//           //HEAD, NUMBER가 같은 경우 index로 순서보장
//           if (a.index < b.index) return -1;
//           else return 1;
//         }
//       }
//     });

  
//     return answer.map(obj => obj.value.join(''));
//   }

function solution(files) {
    var answer = [];
    const regex = /(\d+)/g;         // 숫자가 1개이상 매칭되는 전체 정규식

    for (var i =0; i< files.length; i++) {
        console.log(files[i].split(regex));
        answer.push({idx: i,  value : files[i].split(regex), origin : files[i]});
    }

    answer.sort((a,b) => {
        var head1 = a.value[0].toLowerCase();
        var head2 = b.value[0].toLowerCase();

        if (head1 > head2) return 1;
        else if (head1 < head2) return -1;
        else {
            var number1 = Number(a.value[1]);
            var number2 = Number(b.value[1]);

            if (number1 > number2) return 1;
            else if (number1 < number2) return -1;
            //HEAD, NUMBER가 같은 경우 index로 순서보장
            else {
                if (a.idx < b.idx) return -1;
                else return 1;
            }
        }
    });

    var result =[];
    answer.map((x) => result.push(x.origin));
    answer = result;
    // console.log('answer >> ' , answer);
    return answer;
}

solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]);
// solution(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]);