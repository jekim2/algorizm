/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
  
    let sum = 0;
    
    for(let row = 0; row < matrix.length; row ++) {
      for(let col = 0; col < matrix[0].length; col++) {
        // console.log(row, col, matrix[row][col]);
        if(matrix[row][col] == 1) {
          if(row == 0 || col ==0 ) {
            sum ++;        // 1 * 1
          } else {
            matrix[row][col] = Math.min(matrix[row-1][col-1] , matrix[row-1][col], matrix[row][col-1]) + matrix[row][col];    // [1][1]
            sum +=  matrix[row][col];
          }
        }
      }
    }
    console.log('sum >> ' , sum);
    console.log('matrix >> ' , matrix);
    return sum;
  
      
  };

  countSquares([
    [0,1,1,1],
    [1,1,1,1],
    [0,1,1,1]
  ]);