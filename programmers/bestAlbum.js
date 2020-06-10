// 문제 설명
// 스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.

// 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
// 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
// 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
// 노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때, 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.

// 제한사항
// genres[i]는 고유번호가 i인 노래의 장르입니다.
// plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
// genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
// 장르 종류는 100개 미만입니다.
// 장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
// 모든 장르는 재생된 횟수가 다릅니다.
// 입출력 예
// genres	plays	return
// [classic, pop, classic, classic, pop]	[500, 600, 150, 800, 2500]	[4, 1, 3, 0]

// 입출력 예 설명
// classic 장르는 1,450회 재생되었으며, classic 노래는 다음과 같습니다.

// 고유 번호 3: 800회 재생
// 고유 번호 0: 500회 재생
// 고유 번호 2: 150회 재생
// pop 장르는 3,100회 재생되었으며, pop 노래는 다음과 같습니다.

// 고유 번호 4: 2,500회 재생
// 고유 번호 1: 600회 재생
// 따라서 pop 장르의 [4, 1]번 노래를 먼저, classic 장르의 [3, 0]번 노래를 그다음에 수록합니다.

// ※ 공지 - 2019년 2월 28일 테스트케이스가 추가되었습니다.

//  [classic, pop, classic, classic, pop]	[500, 600, 501, 800, 900]          [3,2,4,1]
// function solution(genres, plays) {
//     var answer = [];
//     var array = [];
//     var test_array =[];
//     for (var i =0; i< genres.length; i++) {
//         array.push({
//             'idx' : i,
//             'type' : genres[i],
//             'num' : plays[i]
//         });
//     }


//     array.sort((a,b) => {
//         return b['num'] - a['num']
//     });

//     // console.log('array >> ' , JSON.stringify(array));

//     let flag = false;
//     for (var j=0; j< array.length; j++) {
//         flag = false;
//         if ( test_array.length > 0) {
//             for (var k=0; k< test_array.length; k++) {
//                 debugger;
//                 if (test_array[k][0]["type"] ===  array[j]["type"] ) {
//                     test_array[k].push(array[j]);
//                     flag = true;
//                     break;
//                 }
//             }
//             if (!flag) test_array.push([array[j]]);
//         } else {
//             test_array.push([array[j]]);
//         }
//     }
//     // console.log('test_array >>> ' , JSON.stringify(test_array));

//     for (var i=0 ; i< test_array.length; i++) {
//         var arr = test_array[i];
//         // console.log('arr >> ' , JSON.stringify(arr));
//         for (var j=0 ; j< arr.length; j++) {
//             if (j < 2) {
//                 answer.push(arr[j]['idx']);
//             }
//         }
//     }
//     // console.log('answer >> ' , answer);
//     return answer;
// }

function solution(genres, plays) {
    const summaryGenres = genres.reduce((acc, cur, index) => {
      if (!acc[cur]) {
        acc[cur] = {
          totalPlay: 0,
          playList: [],
        };
      }
  
      acc[cur].totalPlay += plays[index];
      acc[cur].playList.push([index, plays[index]]);
  
      return acc;
    }, {});

    console.log('summaryGenres >> '  , JSON.stringify(summaryGenres));
  
    const summaryGenresList = Object.values(summaryGenres).sort(
      (genre1, genre2) => {
        return genre2.totalPlay - genre1.totalPlay;
      },
    );

    console.log('summaryGenresList >> '  , JSON.stringify(summaryGenresList));

    // [{"totalPlay":3100,"playList":[[1,600],[3,2500]]},{"totalPlay":1550,"playList":[[0,400],[2,150],[4,500],[5,500]]}]
      
    const answer = summaryGenresList.reduce((acc, genre) => {

      genre.playList.sort((play1, play2) => {
        return play2[1] - play1[1];
      });
      acc.push(genre.playList[0][0]);
      console.log('acc >> ' , acc);  
  
      if (genre.playList.length > 1) {
        acc.push(genre.playList[1][0]);
      }
  
      return acc;
    }, []);

    console.log('answer > ' ,  answer);
  
    return answer;
  }
// genres [classic, pop, classic, pop, classic, classic]
// plays [400, 600, 150, 2500, 500, 500]
// Return [3, 1, 4, 5]



// solution(['classic', 'pop', 'classic', 'classic', 'pop'],	[600, 600, 600, 600, 900]);
solution(['classic', 'pop', 'classic', 'pop', 'classic', 'classic'],	[400,600,150,2500,500,500]);    // 3,1,4,5