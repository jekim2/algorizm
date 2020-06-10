
function solution(board, moves) {
    var answer = 0;
    var tempArray = [];

    console.log(board.entries());

    moves.map((move, idx) => {
        for(var [boardIdx,boardLine] of board.entries()) {
            var space = boardLine[move-1];
            if(space === 0) {
                continue;
            } else {
                if([...tempArray].pop() == space){
                    tempArray.pop();
                    answer += 2;
                } else {
                    tempArray.push(space);
                }
                board[boardIdx][move-1] = 0;

                break;
            }
        }
    });

    console.log(tempArray);

    return answer;
}