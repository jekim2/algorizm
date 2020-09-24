/* 463. Island Perimeter

Share
You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

 

Example:

Input:
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Output: 16

Explanation: The perimeter is the 16 yellow stripes in the image below:

 */

 /**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {

    let total = 0;
    let minus = 0;
    for (var i = 0; i < grid.length; i++) {
        console.log('grid >> ' , grid[i]);
        for (var j = 0 ; j < grid[i].length ; j++) {

            console.log("grid[i][j] >> " ,i, j, grid[i][j]);
            if (grid[i][j] == 1) total += 4;
            if (i-1 >= 0 && grid[i-1][j] == 1 )  minus ++;
            else if (grid[i][j+1] == 1) minus ++;
            else if ( j-1 >= 0 && grid[i][j-1] == 1)  {
                minus ++;
                console.log(j-1);
                console.log(grid[i][j-1]);
            }
            else if (grid[i][j+1] == 1 ) minus ++;
        }
    }

    console.log('total, minus, result >> ' , total, minus, total - minus);

    return total - minus;
};

islandPerimeter([[1,0]]);

var islandPerimeter = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    var perimeter = 0;
    
    for (var row = 0; row < rows; row++) {
        for (var col = 0; col < cols; col++) {
            if (!grid[row][col]) continue;
            
            perimeter += 4;
            
            // abstract the number of adjacent island
            if (row > 0 && grid[row - 1][col]) perimeter--;
            if (col > 0 && grid[row][col - 1]) perimeter--;
            if (row < rows - 1 && grid[row + 1][col]) perimeter--;
            if (col < cols - 1 && grid[row][col + 1]) perimeter--;
        }
    }
    
    return perimeter;
};