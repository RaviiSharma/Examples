
//700. ___________________________Search in a Binary Search Tree_____________________________

// Find the node in the BST that the node's value equals val and return the subtree
//  rooted with that node. If such a node does not exist, return null.

// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]

var searchBST = function(root, val) {
    if (root.val === val) {
        return root;
    } else if (val < root.val && root.left) {
        return searchBST(root.left, val);
    } else if (val > root.val && root.right) {
        return searchBST(root.right, val); 
    } else {
        return null;
    }
};console.log(searchBST([4,2,7,1,3],2))//not working

//98. ____________________________________Validate Binary Search Tree_______________________

// Input: root = [2,1,3]
// Output: true

// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

// var isValidBST = function(root) {
//     let output=true;
//     const loop=(tree,min,max)=>{
//         if((tree.val>min||min===undefined)&&(tree.val<max||max===undefined)){
//             if(tree.left){
//                 loop(tree.left,min,tree.val)
//             }if(tree.right){
//                 loop(tree.right,tree.val,max)
//             }
//         }else{
//             output=false
//         }
//     };
//     loop(root)
//     return output;
// };console.log(isValidBST([2,1,3]))


/** BINARY SEARCH TREE (Tree traversal)

 Tree traversal is the process of visiting each node in a tree data structure exactly once. There are several ways to traverse a tree, but the three most common traversal algorithms are:
In-order traversal: In this traversal, the left subtree is visited first, followed by the root node, and then the right subtree. In a binary search tree, this traversal visits nodes in ascending order. In other types of trees, this traversal may visit nodes in some specific order.
Pre-order traversal: In this traversal, the root node is visited first, followed by the left subtree and then the right subtree.
Post-order traversal: In this traversal, the left subtree is visited first, followed by the right subtree, and then the root node.

In each traversal, we visit each node once and perform some operation on it, such as printing the value of the node, or adding it to a list.
 */
// class Node {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   function inOrderTraversal(node) {
//     if (node !== null) {
//       inOrderTraversal(node.left);
//       console.log(node.value);
//       inOrderTraversal(node.right);
//     }
//   }
  
//   function preOrderTraversal(node) {
//     if (node !== null) {
//       console.log(node.value);
//       preOrderTraversal(node.left);
//       preOrderTraversal(node.right);
//     }
//   }
  
//   function postOrderTraversal(node) {
//     if (node !== null) {
//       postOrderTraversal(node.left);
//       postOrderTraversal(node.right);
//       console.log(node.value);
//     }
//   }
  
//   // Example usage:
//   const root = new Node(1);
//   root.left = new Node(2);
//   root.right = new Node(3);
//   root.left.left = new Node(4);
//   root.left.right = new Node(5);
  
//   console.log("In-order traversal:");
//   inOrderTraversal(root);
  
//   console.log("Pre-order traversal:");
//   preOrderTraversal(root);
  
//   console.log("Post-order traversal:");
//   postOrderTraversal(root);