/* 107. Binary Tree Level Order Traversal II

Share
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]

 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var levelOrderBottom = function(root) {
    let temp_array = [];


    const traverseFunc = (node, level) => {

        if (!node) return null;

        if (temp_array[level]) temp_array[level].push([node.val]);
        else temp_array.push([node.val])

        if (node.left) traverseFunc(node.left, level + 1);
        if (node.right) traverseFunc(node.right, level + 1);


    };

    traverseFunc(root, 0);

    return temp_array.reverse();

}