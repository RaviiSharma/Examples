
// /* ____________________________________________________Stack using Linked List:________________________________________*/
// /*                  https://www.geeksforgeeks.org/introduction-to-stack-data-structure-and-algorithm-tutorials/ 
// */
// /*Advantages of Linked List implementation:

// The linked list implementation of a stack can grow and shrink according to the needs at runtime.
// It is used in many virtual machines like JVM.

// Disadvantages of Linked List implementation:

// Requires extra memory due to the involvement of pointers.
// // Random accessing is not possible in stack.*/

class Stack {
    constructor() {
      this.item = [];
      this.maxSize = 6;   //likhe ya na likhe does not affect 
    }
  //   //add element to stack
    add(ele) {
      return this.item.push(ele);
    }
  
    remove(ele) {
      return this.item.pop(ele);
    }
  
  //   //view last element
    peek(){
      return this.item[this.item.length-1]
    }
    //view empty or not
    isEmpty(){return this.item.length==0}
    //view stack full or not
    isFull(){return this.item.length==this.maxSize}
    //clear stack 
    clear(){return this.item=[]}
   }
  // //create object
  let stack=new Stack();
  stack.add(1)
   stack.add(2)
   stack.add(3)
   stack.add(4)
  console.log(stack.item)
  
  //console.log(stack.remove())
  console.log(stack.item)
   console.log(stack.peek())
   console.log(stack.isEmpty())
   console.log(stack.isFull())//stack underflow/overflow hoga toh FALSE batye g. given maxSize ke items honge toh hi TRUE btye g
   //console.log(stack.clear())
   console.log(stack.peek())      //calling peek()/pop() in empty stack:- underflow condition 
   stack.add(1)
   stack.add(2)
   console.log(stack.item)
   console.log(stack.isFull())

// //____________________________________________________________________________________________________________________________
// // var root;
 
// // class StackNode {

// //    constructor(data) {
// //        this.data = data;
// //        this.next = null;
// //    }
// // }



// // function push(data) {
// //    var newNode = new StackNode(data);

// //    if (root == null) {
// //        root = newNode;
// //    } else {
// //        var temp = root;
// //        root = newNode;
// //        newNode.next = temp;
// //    }
// //    console.log(data + " pushed to stack<br/>");
// // }

// // function pop() {
// //    var popped = Number.MIN_VALUE;
// //    if (root == null) {
// //      console.log("Stack is Empty");
// //    } else {
// //        popped = root.data;
// //        root = root.next;
// //    }
// //    return popped;
// // }

// // function isEmpty() {
// //     if (root == null) {
// //         return true;
// //     } else
// //         return false;
// //  }

// // function peek() {
// //    if (root == null) {
// //      console.log("Stack is empty");
// //        return Number.MIN_VALUE;
// //    } else {
// //        return root.data;
// //    }
// // }

// // // Driver code
// //    push(10);
// //    push(20);
// //    push(30);

// //    //console.log(pop() + " popped from stack<br/>");

// //     console.log("Top element is " + peek());


// /*_________________________________________________________QUEUE DATA STRUCTURE____________________________________________________ */
// /*                        https://www.geeksforgeeks.org/introduction-to-queue-data-structure-and-algorithm-tutorials/ 
// */

//  class Queue
//  {
// //     // Array is used to implement a Queue
//     constructor()
//     {
//         this.items = [];
//         this.maxSize=3
//     }
//     isEmpty()
//     {
//         // return true if the queue is empty.
//         return this.items.length == 0;
//     }
//     enqueue(element)
//     {   
//         // adding element to the queue
//         this.items.push(element);
//         console.log(element + " enqueued to queue");
//     }
//     dequeue()
//     {
//         // removing element from the queue
//         // returns underflow when called
//         // on empty queue
//         if(this.items.length>0){return this.items.shift()}
//             //return "Underflow";
//        // return this.items.shift();
//             //console.log(element + " enqueued to queue")

//     }
//     front()
//     {
//         // returns the Front element of
//         // the queue without removing it.
//         if(this.isEmpty())
//             return "No elements in Queue";
//         return this.items[0];
//     }
//     rear() //peek()
//     {
//         // returns the Rear element of
//         // the queue without removing it.
//         if(this.isEmpty())
//             return "No elements in Queue";
//         return this.items[this.items.length-1];
//     };
//     //size(){this.items.length}
//     isFull(){return this.items.length==this.maxSize}
//     clear(){ return this.items=[]}
//  }
 
// // creating object for queue class
// var queue = new Queue();
 
// // Adding elements to the queue
// queue.enqueue(10);
//  queue.enqueue(20);
//  queue.enqueue(30);
// // queue.enqueue(40);
 
// // // queue contains [10, 20, 30, 40]
// // // removes 10
//  console.log(queue.dequeue() + " dequeued from queue");
 
// // // queue contains [20, 30, 40]
// // // Front is now 20
//  console.log("Front item is " + queue.front());
 
// // // printing the rear element
// // // Rear is 40
//  console.log("Rear item is " + queue.rear());

// console.log(queue.isEmpty())
// //console.log(queue.size())
// console.log(queue.isFull())
// queue.clear()
// console.log(queue.items)

// /*Time complexity: All the operations have O(1) time complexity.
// Auxiliary Space: O(N) */


class Newobject{
  constructor(){
    this.val=val
  }
}

let object= new Newobject(2)

console.log(object)



 let inserting = Sc.person.insert("name:Ravi Kumar Sharma " ,"department:mechanical")