/* 257. Binary Tree Paths

Share
Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

Example:

Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    console.log('root >> ' , root);     // [1,2,3,null,5]
	// If null return an empty array
    if (root === null) {console.log(' == null == '); return [];}
	// If no children return the nodes value itself as a string within an array
    else if (root.left === null && root.right === null) {
        console.log(" == root val == " , [`${root.val}`] )
         return  [`${root.val}`];

    }
    else {
        console.log('left' , root.left);    // [2, null, 5]
        console.log('right' , root.right);  // [3]
		// For all child paths add the root to their head one by one.
        let left = binaryTreePaths(root.left).map(x => root.val + '->' + x);
        console.log('result left >> ' , left);
        let right = binaryTreePaths(root.right).map(x => root.val + '->' + x);
		console.log('result right >> ' , right);
        
        console.log('return >> ' , [...left,...right]);
		// return the array with the root value attached
        return [...left, ...right];
    }
};

// root >>  [1,2,3,null,5]
// left [2,null,5]
// right [3]

// root >>  [2,null,5]
// left null
// right [5]


// root >>  null
//  == null == 
// result left >>  []


// root >>  [5]
//  == root val ==  [ '5' ]
// result right >>  [ '2->5' ]


// return >>  [ '2->5' ]
// result left >>  [ '1->2->5' ]


// root >>  [3]
//  == root val ==  [ '3' ]
// result right >>  [ '1->3' ]
// return >>  [ '1->2->5', '1->3' ]