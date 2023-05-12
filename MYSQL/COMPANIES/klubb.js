// console.log(1);
// setTimeout(() => console.log(2), 0)
// new Promise((res, rej) => res(console.log(3)))
// console.log(4)


//8. "xlsx package to read an Excel file and then convert the data to JSON using the utils.sheet_to_json"

//round 2 .

/*what is Redis and how redis?
Redis is an open-source, in-memory key-value data store that is fast and flexible. It stores data
in memory and uses a simple key-value data model, supporting various data types. Clients can 
manipulate data with various commands, and Redis supports persistence, replication, and clustering for scalability.


sql vs nosql?
SQL databases use tables and are well-suited for complex queries and transactions, 
while NoSQL databases use various data models and are highly scalable and flexible for
unstructured data. The choice depends on specific application requirements and data types.

example 

. Time complexity is a measure of the amount of time it takes an algorithm to run as a function of the size of its input.

// STACK DATA STRUCTURE

A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle, which means that the last element added to the stack will be the first one to be removed. It is analogous to a stack of plates in a cafeteria where the last plate placed on top is the first one to be removed.

A stack can be implemented using an array or a linked list. The two main operations supported by a stack are:

Push: adds an element to the top of the stack.
Pop: removes the element at the top of the stack.
Additionally, a stack may support the following operations:

Peek: returns the element at the top of the stack without removing it.
isEmpty: returns a boolean value indicating whether the stack is empty or not.
*/
// class Stack {
//     constructor() {
//       this.items = [];
//     }
  
//     push(item) {
//       this.items.push(item);
//     }
  
//     pop() {
//       if (this.items.length === 0) {
//         return null;
//       }
//       return this.items.pop();
//     }
  
//     peek() {
//       if (this.items.length === 0) {
//         return null;
//       }
//       return this.items[this.items.length - 1];
//     }
  
//     isEmpty() {
//       return this.items.length === 0;
//     }
//   }
  
//   // Example usage:
//   const stack = new Stack();
//   stack.push(1);
//   stack.push(2);
//   stack.push(3);
//   console.log(stack.peek()); // Output: 3
//   console.log(stack.pop()); // Output: 3
//   console.log(stack.pop()); // Output: 2
//   console.log(stack.isEmpty()); // Output: false
//   console.log(stack.pop()); // Output: 1
//   console.log(stack.isEmpty()); // Output: true
//   console.log(stack.pop()); // Output: null (stack is empty)

  /* QUEUE DATA STRUCTURE

A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle, which means that the first element
added to the queue will be the first one to be removed. It is analogous to a queue of people waiting in line for a ticket,
where the person who arrived first is the first one to be served.A queue can be implemented using an array or a linked list. 
The two main operations supported by a queue are:

Enqueue: adds an element to the back of the queue.
Dequeue: removes the element at the front of the queue.
Additionally, a queue may support the following operations:

Peek: returns the element at the front of the queue without removing it.
isEmpty: returns a boolean value indicating whether the queue is empty or not.*/

// class Queue {
//   constructor() {
//     this.items = [];
//   }

//   enqueue(item) {
//     this.items.push(item);
//   }

//   dequeue() {
//     if (this.items.length === 0) {
//       return null;
//     }
//     return this.items.shift();
//   }

//   peek() {
//     if (this.items.length === 0) {
//       return null;
//     }
//     return this.items[0];
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }
// }

// // Example usage:
// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// console.log(queue.peek()); // Output: 1
// console.log(queue.dequeue()); // Output: 1
// console.log(queue.dequeue()); // Output: 2
// console.log(queue.isEmpty()); // Output: false
// console.log(queue.dequeue()); // Output: 3
// console.log(queue.isEmpty()); // Output: true
// console.log(queue.dequeue()); // Output: null (queue is empty)
   
   
  
/** BINARY SEARCH TREE (Tree traversal)

 Tree traversal is the process of visiting each node in a tree data structure exactly once. There are several ways to traverse a tree, but the three most common traversal algorithms are:
In-order traversal: In this traversal, the left subtree is visited first, followed by the root node, and then the right subtree. In a binary search tree, this traversal visits nodes in ascending order. In other types of trees, this traversal may visit nodes in some specific order.
Pre-order traversal: In this traversal, the root node is visited first, followed by the left subtree and then the right subtree.
Post-order traversal: In this traversal, the left subtree is visited first, followed by the right subtree, and then the root node.

In each traversal, we visit each node once and perform some operation on it, such as printing the value of the node, or adding it to a list.
 */
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function inOrderTraversal(node) {
    if (node !== null) {
      inOrderTraversal(node.left);
      console.log(node.value);
      inOrderTraversal(node.right);
    }
  }
  
  function preOrderTraversal(node) {
    if (node !== null) {
      console.log(node.value);
      preOrderTraversal(node.left);
      preOrderTraversal(node.right);
    }
  }
  
  function postOrderTraversal(node) {
    if (node !== null) {
      postOrderTraversal(node.left);
      postOrderTraversal(node.right);
      console.log(node.value);
    }
  }
  
  // Example usage:
  const root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  
  console.log("In-order traversal:");
  inOrderTraversal(root);
  
  console.log("Pre-order traversal:");
  preOrderTraversal(root);
  
  console.log("Post-order traversal:");
  postOrderTraversal(root);
  

  