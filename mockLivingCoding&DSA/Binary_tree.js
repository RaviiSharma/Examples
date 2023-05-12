

//________________________________________Tree Traversals (Inorder, Preorder and Postorder) and Level order traversal _______________________________

// javascript program for different tree traversals

/* Class containing left and right child of current
node and key value*/

// class Node {
// 	constructor(val) {
//         console.log("yaha s Node me value aa rha " + val)
// 		this.key = val;
// 		this.left = null;
// 		this.right = null;
// 	}
// }

// 	// Root of Binary Tree
// 	var root = null;

	
// 	/*
// 	* Given a binary tree, print its nodes according to the "bottom-up" postorder
// 	* traversal.
// 	*/
// 	function printPostorder(node) {
// 		if (node == null)
// 			return;

// 		// first recursion on left subtree
// 		printPostorder(node.left);

// 		// then recur on right subtree
// 		printPostorder(node.right);

// 		// now deal with the node
// 		console.log(node.key);
// 	}

// 	/* Given a binary tree, print its nodes in inorder */
// 	function printInorder(node) {
// 		if (node == null)
// 			return;

// 		/* first recur on left child */
// 		printInorder(node.left);

// 		/* then print the data of node */
// 		console.log(node.key);

// 		/* now recur on right child */
// 		printInorder(node.right);
// 	}

// 	/* Given a binary tree, print its nodes in preorder */
// 	function printPreorder(node) {
// 		if (node == null)
// 			return;

// 		/* first print data of node */
// 		console.log(node.key);

// 		/* then recur on left subtree */
// 		printPreorder(node.left);

// 		/* now recur on right subtree */
// 		printPreorder(node.right);
		
// 	}
// 	// Driver method

// 		root = new Node(1);
// 		root.left = new Node(2);
// 		root.right = new Node(3);
// 		root.left.left = new Node(5);
// 		root.left.right = new Node(6);

// 		console.log("Preorder traversal of binary tree is");
// 		printPreorder(root);

// 		console.log("Inorder traversal of binary tree is");
// 		printInorder(root);

// 		console.log("Postorder traversal of binary tree is");
// 		printPostorder(root);

        /*Time Complexity: O(N)
        Auxiliary Space: If we don’t consider the size of the stack for
        function calls then O(1) otherwise O(h) where h is the height of the tree.*/


//_______________________________________Level Order Binary Tree Traversal Using Queue____________________________
/*                                  https://www.geeksforgeeks.org/level-order-tree-traversal/
*/
/*For each node, first, the node is visited and then it’s child nodes are put in a FIFO queue.
 Then again the first node is popped out and the it’s child nodes are put in a FIFO queue and
  repeat until que becomes empty.*/

/* Class to represent Tree node */

// class Node {
//     constructor(val) {
//         this.data = val;
//         this.left = null;
//         this.right = null;
//     }
// }
 
// /* Class to print Level Order Traversal */
//     /*
//      * Given a binary tree. Print its nodes in level order using array for
//      * implementing queue
//      */
//     function printLevelOrder() {
//         var queue = [];
//         queue.push(root);
//         while (queue.length != 0) {
//             /*
//              * The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
//              * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
//              */
//             var tempNode = queue.shift();
//             console.log(tempNode.data + " ");
 
//             /* Enqueue left child */
//             if (tempNode.left != null) {
//                 queue.push(tempNode.left);
//             }
 
//             /* Enqueue right child */
//             if (tempNode.right != null) {
//                 queue.push(tempNode.right);
//             }
//         }
//     }
 
//   /* creating a binary tree and entering the nodes */
//         var root = new Node(1);
//         root.left = new Node(2);
//         root.right = new Node(3);
//         root.left.left = new Node(4);
//         root.left.right = new Node(5);
//         console.log("Level order traversal of binary tree is - ");
//         printLevelOrder();

    /*Time Complexity: O(N) where n is the number of nodes in the binary tree.
    Auxiliary Space: O(N) where n is the number of nodes in the binary tree.*/



//__________________________________________________maximum height of binary tree_________________________________________
// JavaScript program to find height of tree
  
// A binary tree node

class Node
{
    constructor(item)
    {
        this.data=item;
        this.left=this.right=null;
    }
}
  
    let root;
      
     /* Compute the "maxDepth" of a tree -- the number of
       nodes along the longest path from the root node
       down to the farthest leaf node.*/
    function maxDepth(node)
    {
        if (node == null)
            return 0;
        else
        {
            /* compute the depth of each subtree */
            let lDepth = maxDepth(node.left);
            let rDepth = maxDepth(node.right);
            let ans=Math.max(lDepth,rDepth)+1
            return ans;
    
        
        }
    }
      
    /* Driver program to test above functions */
      
        root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.right = new Node(5);
    
        console.log("Height of tree is : " + maxDepth(root));


    //__________________________________________________________________________

    var maxDepth = function(root) {
        if (!root) return 0;
        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    };
    
    