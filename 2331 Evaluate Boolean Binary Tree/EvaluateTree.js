class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
/**
 * 2331. Evaluate Boolean Binary Tree
 * 
 * You are given the root of a full binary tree with the following properties:
 * 
 * Leaf nodes have either the value 0 or 1, where 0 represents False and 1 represents True.
 * Non-leaf nodes have either the value 2 or 3, where 2 represents the boolean OR and 3 represents the boolean AND.
 * The evaluation of a node is as follows:
 * 
 * If the node is a leaf node, the evaluation is the value of the node, i.e. True or False.
 * Otherwise, evaluate the node's two children and apply the boolean operation of its value with the children's evaluations.
 * Return the boolean result of evaluating the root node.
 * 
 * A full binary tree is a binary tree where each node has either 0 or 2 children.
 * 
 * A leaf node is a node that has zero children.
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * @param {TreeNode} root
 * @return {boolean}
 */
var evaluateTree = function(root) {
    
    root = evaluateNode(root)

    return (root.val === 1 ? true : false)
};

var evaluateNode = function(node) {

    // Base case of root val being less than 2
    if(node.val < 2) return node;

    if(node.left.val > 1){
        evaluateTree(node.left);
    }

    if(node.right.val > 1){
        evaluateTree(node.right);
    }

    // This section will run when both children are 0 or 1 (true or false)
    if(node.val === 2){ // If this node is an OR node
        node.val = ((node.left.val === 1) || (node.right.val === 1) ? 1 : 0)
        node.left = null;
        node.right = null;
    }
    else if(node.val === 3){ // If this node is an AND node
        node.val = ((node.left.val === 1) && (node.right.val === 1) ? 1 : 0)
        node.left = null;
        node.right = null;
    }

    return node;

}

var input  = [2,1,3,null,null,0,1]

rootInput = new TreeNode(input[0], new TreeNode(input[1]), new TreeNode(input[2], new TreeNode(input[5]), new TreeNode(input[6])))

rootInput2 = new TreeNode(0)

console.log(evaluateTree(rootInput2));