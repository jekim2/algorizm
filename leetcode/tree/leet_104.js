/* 104. Maximum Depth of Binary Tree

Share
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3. */

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
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) return 0;
    console.log(root);
    console.log(maxDepth(root.left));
    console.log(maxDepth(root.right));
    // console.log( Math.max(maxDepth(root.left), maxDepth(root.right)) + 1);
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

/* 
TreeNode {
    val: 3,
    left: TreeNode { val: 9, left: null, right: null },
    right: TreeNode {
      val: 20,
      left: TreeNode { val: 15, left: null, right: null },
      right: TreeNode { val: 7, left: null, right: null }
    }
  }
  TreeNode { val: 9, left: null, right: null }
  0
  0
  1
  TreeNode {
    val: 20,
    left: TreeNode { val: 15, left: null, right: null },
    right: TreeNode { val: 7, left: null, right: null }
  }
  TreeNode { val: 15, left: null, right: null }
  0
  0
  1
  TreeNode { val: 7, left: null, right: null }
  0
  0
  1
  TreeNode { val: 15, left: null, right: null }
  0
  0
  TreeNode { val: 7, left: null, right: null }
  0
  0
  2
  TreeNode { val: 9, left: null, right: null }
  0
  0
  TreeNode {
    val: 20,
    left: TreeNode { val: 15, left: null, right: null },
    right: TreeNode { val: 7, left: null, right: null }
  }
  TreeNode { val: 15, left: null, right: null }
  0
  0
  1
  TreeNode { val: 7, left: null, right: null }
  0
  0
  1
  TreeNode { val: 15, left: null, right: null }
  0
  0
  TreeNode { val: 7, left: null, right: null }
  0
  0 */