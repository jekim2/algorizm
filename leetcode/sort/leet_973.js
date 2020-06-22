/* 973. K Closest Points to Origin

Share
We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

(Here, the distance between two points on a plane is the Euclidean distance.)

You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)


Example 1:
Input: points = [[1,3],[-2,2]], K = 1
Output: [[-2,2]]
Explanation:
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].

Example 2:
Input: points = [[3,3],[5,-1],[-2,4]], K = 2
Output: [[3,3],[-2,4]]
(The answer [[-2,4],[3,3]] would also be accepted.) */

/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
// var kClosest = function(points, K) {

//     if (points.length == 0 || k == 0) return [];

//     points.map((p) => {
//         var sum = 0;
//         console.log('p >> ', p);
//         for (var i = 0; i < p.length; i++) {
//             sum += Math.abs(p[i]) * Math.abs(p[i]) ;
//         }
//        p[2] = Math.sqrt(sum);
//     });
//     console.log('points >> ', points);

//     points.sort((a, b)=>{
//         if (a[2] > b[2] ) return 1;
//         else if (a[2] < b[2] ) return -1;
//         else return 0;
//     });

//     console.log('points 222>> ', points.slice(0, K));
//     console.log('points 222>> ', points);
//     var result = [];
//     for (var i = 0; i < points.slice(0, K).length; i++) {
//         result.push([points[i][0] , points[i][1]]);
//     }
//     console.log('result >> ' , result);
//     return result;
// };

/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest_2 = function(points, K) {
    return points.sort((a, b) => getLength(a) - getLength(b)).slice(0, K);
};

// we don't need to find square root of c here
// squared length is enough to determine order
var getLength = function([a, b]) {
    return (a * a) + (b * b);
}

kClosest([[1,3]], 0);