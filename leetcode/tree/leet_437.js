/* 437. Path Sum III
Easy

3500

301

Add to List

Share
You are given a binary tree in which each node contains an integer value.

Find the number of paths that sum to a given value.

The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

Example:

root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

Return 3. The paths that sum to 8 are:

1.  5 -> 3
2.  5 -> 2 -> 1
3. -3 -> 11 */

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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    if(!root) return null;

    const calculate = (root, calSum, count) => {
        if (!root) return 0;
        console.log('root, calSum >> ' , root, calSum);
        // root.val 의 합이 == sum , count +=1;
        if(!root.val ) calSum += root.val;

        if(sum == calSum) count +=1;

        return count;
    };

   const left =  calculate(root.left, 0);
   const right = calculate(root.right, 0);

   console.log('left >> ' , left);
   console.log('right >> ' , right);

   return left + right;

};

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    if (!root) return 0;
    return (
      pathSumOnlyStart(root, sum) +
      pathSum(root.left, sum) +
      pathSum(root.right, sum)
    );
  };
  
  const pathSumOnlyStart = (root, sum) => {
    if (!root) return 0;
    const self = root.val === sum ? 1 : 0;
    return (
      self +
      pathSumOnlyStart(root.left, sum - root.val) +
      pathSumOnlyStart(root.right, sum - root.val)
    );
  };


  var pathSum = function(root, sum) {
    if(!root) return null;
    
    const count = 0; 
       
    const dfs = (node, started, node_sum) => {
        
      if(!node) return 0;

      if(node_sum == 0) count ++;

      dfs(root.left, false, node_sum - node.val);
      dfs(root.right, false, node_sum - node.val);

    };
    
    dfs(root, true, sum);

    
    return count;
    
}





