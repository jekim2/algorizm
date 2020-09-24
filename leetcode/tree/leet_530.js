/* 530. Minimum Absolute Difference in BST

Share
Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

Example:

Input:

   1
    \
     3
    /
   2

Output:
1

Explanation:
The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3). */


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
var getMinimumDifference = function(root) {
    var prev = Infinity;
    var totalMin = Infinity;
    
    function traverse(node) {
        if (!node) {
            return;
        }
        
        traverse(node.left);
        
        totalMin = Math.min(totalMin, Math.abs(node.val - prev));
        prev = node.val;
        
        traverse(node.right);
    }
    
    traverse(root);
    
    return totalMin;
};

// flag, node  >>  right [3,6,7]
// flag, node  >>  left [6]
// totalMin, node.val, prev >>  2 6 1
// totalMin, node.val, prev >>  2 3 6
// flag, node  >>  right [7]
// totalMin, node.val, prev >>  2 7 3


Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

Example:

Input: The root of a Binary Search Tree like this:
              5
            /   \
           2     13

Output: The root of a Greater Tree like this:
             18
            /   \
          20     13

/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    
    if(!s ) return null;
    
    let result = false;
    
    console.log('s >> ' , s);
    console.log('t >> ' , t);
    
    
    const traverse = (s_node, t_node) => {
        // console.log('s_node >> ' , s_node);
        // console.log('t_node >> ' , t_node);



        


        // if(!s_node) return;
        ttttt
        // console.log(traverse(s_node.left, t_node) == t_node);

        // return traverse(s_node.left, t_node) == t_node;
        
    };
    
   result =  traverse(s, t);
    
    return result;
    
};


var averageOfLevels = function(root) {
    const sum = [];
    const count = []
    const traverse = (node, i) => {
        if(sum[i] === undefined) sum[i] = 0;
        if(count[i] === undefined) count[i] = 0;
        sum[i] += node.val;
        count[i]++;
        if(node.left) traverse(node.left, i + 1);
        if(node.right) traverse(node.right, i + 1)
    }
    traverse(root, 0)
    for(let i = 0; i < sum.length; i++){
        sum[i] = sum[i] / count[i]
    }
    return sum;
};


var averageOfLevels = function(root) {
    let AverageValues =[];
    let queue=[root];
    while(queue.length){

        const LENGTH = queue.length;

        console.log('LENGTH >> ' , LENGTH);
        let sum =0;
        for(let i=0; i<LENGTH; i++){
            const node = queue.shift();
            sum +=node.val
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }  
        AverageValues.push(sum/LENGTH);
    }
    return AverageValues;
};

// Given a Binary Search Tree (BST) with the root node root, return the minimum difference between the values of any two different nodes in the tree.

// Example :

// Input: root = [4,2,6,1,3,null,null]
// Output: 1
// Explanation:
// Note that root is a TreeNode object, not an array.

// The given tree [4,2,6,1,3,null,null] is represented by the following diagram:

//           4
//         /   \
//       2      6
//      / \    
//     1   3  

// while the minimum difference in this tree is 1, it occurs between node 1 and node 2, also between node 3 and node 2.


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var minDiffInBST = function(root) {
    if(!root) return null;

    let min_value = Infinity;

    let root_val = Infinity;

    const traverse = (node) => {
        
  
        if(!node) return 0;

        traverse(node.left);
        
        console.log('min_value , node >> ' , min_value, node.val);
    
        min_value = min_value < Math.abs(min_value - node.val) ? min_value : Math.abs(min_value - node.val);

        traverse(node.right);

    };

    console.log('min_value >> ' , min_value);

    traverse(root);
    
    return min_value;
};

// [3,5,1,6,2,9,8,null,null,7,4]
// [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    // Relink
    // start with a fake new root to connect the rest and 
    // assign the pointer to the current node to the new root
    const newRoot = new TreeNode(undefined);
    let cur = newRoot;
    const inorder = node => {
        if (node === null) {
            return;
        }
        inorder(node.left);
        // for current node, we want to only link the node to the right
        node.left = null;
        cur.right = node;
        // reassign node to cur for the next operation
        cur = node;
        inorder(node.right);
    }
    inorder(root)
    return newRoot.right;
};


/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {

    const newRoot = new TreeNode(undefined);
    
    let cur = newRoot;
    const inorder = node => {
        if (node === null) {
            return;
        }
        
 
        inorder(node.left);
        
        cur.left = null;
        cur.right = node;
        cur = node;
        
        inorder(node.right);
    }
    inorder(root)
    return newRoot.right;
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    if(!root) return null;

    let value = 0;
    const traverse = node => {
        if(!node) return true;

        if (value !== node.val) return false;

        if(node.left) traverse(node.left);

        if(node.right) traverse(node.right);


    };
    value = root.val;
    return traverse(root);
};



var isUnivalTree = function(root) {
    if(!root) return true;
    let val = root.val;
    function rec(root){
        if(root){
            if(root.val!==val) return false;
            return rec(root.left) && rec(root.right);
        }
        return true;
    }
    return rec(root)
};




var isCousins = function(root, x, y) {
    function getDepthAndParent(node, n, depth=0, parent){
        if(!node) return null;
        if(node.val === n) {
            return {depth, parent};
        }
        let left = getDepthAndParent(node.left, n, depth+1, node);
        let right = getDepthAndParent(node.right, n, depth+1, node);
        return left || right;
    }
    let {depth: xDepth , parent: xParent } = getDepthAndParent(root,x);
    let {depth: yDepth , parent: yParent } = getDepthAndParent(root,y);  
    
    return xDepth === yDepth && xParent !== yParent;
};


/**
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


 
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    const binaries = [];
    const traverse = (node, str) => {
        if (node === null) {
            return;
        }
        // compose the binary string for the next node
        const binary = `${str}${node.val}`;
        // when visiting a leaf, add binary string to the array
        if (node.left === null && node.right === null) {
            binaries.push(binary);
        }
        
        traverse(node.left, binary);
        traverse(node.right, binary);
    }
    
    traverse(root, '');
    
    return binaries.reduce((sum, binary) => {
        sum += parseInt(binary, 2);
        return sum;
    }, 0)
};