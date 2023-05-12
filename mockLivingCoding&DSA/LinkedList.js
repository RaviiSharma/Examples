/*_____________________________________ Linked List – Data Structure and Algorithm_______________________________________*/
/*                
              https://www.geeksforgeeks.org/introduction-to-linked-list-data-structure-and-algorithm-tutorial/
*/
/* A Linked List is a linear data structure which looks like a chain of nodes, where each node
 is a different element. Unlike Arrays, Linked List elements are not stored at a contiguous location. */

//_______________________________________ singly linked list ____________________________________________________________

//Traversal of items can be done in the forward direction only due to the linking of every node to its next node.

/*Insertion: The insertion operation can be performed in three ways. They are as follows…

1.Inserting At the Beginning of the list
2.Inserting At End of the list
3.Inserting At Specific location in the list

1.Deletion: The deletion operation can be performed in three ways. They are as follows…
2.Deleting from the Beginning of the list
3.Deleting from the End of the list
4.Deleting a Specific Nod

5.Search: It is a process of determining and retrieving a specific node either from the front, the end or anywhere in the list.
6.Display: This process displays the elements of a Single-linked list. */

//singly linked list (print all number )
// class Node{
//     constructor(value){
//         console.log("are"+value)
//         this.value=value
//         this.next=null
//     }
// }
// let head=null
// let tail=null

// let arr=[1,2,3,4,5,6]

// for(ele of arr){
//     let node=new Node(ele)
//     if(!head){
//         head=node
//         tail=node

//     //[value ,next =>] [value, next =>] aage jate jaye ga
//     }else{
//         tail.next=node
//         tail=tail.next
//      }
// };//console.log(head,tail)
// for(let i=0;i<arr.length;i++){
//     console.log(head.value)
//     head=head.next
// }

/* This function is in LinkedList class. Inserts a
new Node at front of the list. This method is
defined inside LinkedList class shown above */

// function push(new_data)
// {
// 	/* 1 & 2: Allocate the Node &
// 			Put in the data*/
// 	var new_node = new Node(new_data);

// 	/* 3. Make next of new Node as head */
// 	new_node.next = head;

// 	/* 4. Move the head to point to new Node */
// 	head = new_node;
// };console.log(push(5))

//_________________________________________________________________________ master class____________________________________

// class LinkedListNode{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
//  }

// //convert this array to Linkelist
// const func = () => {

//     let arr = [1,2,3];
//     let temp = null;
//     for(let i=0;i<arr.length;i++){
//         if(i ==0)
//             {
//                 temp = new LinkedListNode(arr[i]);
//             }
//         else{
//             temp.next = new LinkedListNode(arr[i]);
//             temp = temp.next;
//         }
//         console.log(temp);
//     }
// }

// console.log(func());

/*__________________________________________________________________________________________________________________________

https://leetcode.com/problems/reverse-linked-list/
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
*/
// JavaScript program for reversing the linked list || GFG

// var head;
// 	class Node {
// 		constructor(data) {
// 			this.data = data;
// 			this.next = null;
// 		}
// 	}
//     head = new Node(10);
// 	head.next = new Node(20);

// 	// prints content of double linked list
// 	function printNode(node) {
// 		while (node != null) {
// 			console.log(node.data);
// 			node = node.next;
// 		}
// 	}; printNode(head);//10 20 
//     console.log("Reversed linked list")

// 		/* Function to reverse the linked list */
// 		function reverseNode(node) {
// 			var prev = null,current = node,next = null;
		
// 				while (current != null) {
// 					next = current.next;
// 					current.next = prev;
// 					prev = current;
// 					current = next;
// 				}
// 				return prev;
// 			};
// 			printNode(reverseNode(head));//20 10


//____________________________remove nth node from end of list 
// javascript implementation of the approach
// 	var head;
// 	class Node {
// 		constructor(data) {
// 			this.data = data;
// 			this.next = null;
// 		}
// 	}

// //insert a new Node at front of the list
// head=new Node(1)
// head.next=new Node(2)
// head.next.next=new Node(3)

// // Function to print the linked list
// 	function printNode(node) {
// 		while (node != null) {
// 			console.log(node.data);
// 			node = node.next;
// 		}
// 	};printNode(head);
// 		console.log("Linked List after Deletion is:");

// 	// Function to delete the nth node 
	// function deleteNode(n) {
	// 	// First pointer will point to the head of the linked list
	// 			var first = head;
	// 	// Second pointer will point to the Nth node from the beginning
	// 			var second = head;
	// 			for (i = 0; i < n; i++) {
	// 	// If count of nodes in the given linked list is <= N
	// 				if (second.next == null) {
	// 	// If count = N i.e. delete the head node
	// 					//if (i == n - 1)//2
	// 						head = head.next;
	// 					return;
	// 				}
	// 				second = second.next;
	// 			}
	// 	// Increment both the pointers by one until second pointer reaches the end
	// 			while (second.next != null) {
	// 				first = first.next;
	// 				second = second.next;
	// 			}
	// 	// First must be pointing to the Nth node from the end by now So, delete the node first is pointing to
	// 		first.next = first.next.next;
	// 		};var N = 3;
	// 		deleteNode(N);
    //       console.log("after delete nth node")
 	// 		printNode(head);






// /*
// https://leetcode.com/problems/middle-of-the-linked-list/description/
// */

var head;
class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

//insert a new Node at front of the list
head=new Node(1)
head.next=new Node(2)
head.next.next=new Node(3)
// head.next.next.next=new Node(4)
// head.next.next.next.next=new Node(5)
// head.next.next.next.next.next=new Node(6)


// Function to print the linked list
function printNode(node) {
	while (node != null) {
		console.log(node.data);
		node = node.next;
	}
};printNode(head);

function middleNode(node) {

   let slow = node;
   let fast = node;

   while(fast != null && fast.next != null){

           slow = slow.next;
           fast = fast.next.next;
   }
   return slow;
};console.log(middleNode(head)) //4 5 6

// /*
// https://leetcode.com/problems/merge-two-sorted-lists/description/
// */
// class ListNode{
//     constructor(value){
//        // console.log("are"+value)
//         this.value=value
//         this.next=null
//     }
// }
// var mergeTwoLists = function(list1, list2) {
//    let newHead = new ListNode(0);
//    let temp = newHead;

//    while(list1 != null && list2 != null){

//        if(list1.val < list2.val)
//            {
//                temp.next = list1;
//                list1 = list1.next;
//            }

//        else{
//            temp.next = list2;
//            list2 = list2.next;
//        }

//        temp = temp.next;
//    }

//    while(list1 != null){
//        temp.next = list1;
//        list1 = list1.next;
//        temp = temp.next;
//    }

//       while(list2 != null){
//        temp.next = list2;
//        list2 = list2.next;
//        temp = temp.next;
//    }
//    return newHead.next;

// // //for very large dataset
// //    //TC: o(n+m)= linear= O(n)
// //    //SC: o(n+m)
// };console.log(mergeTwoLists([1,2],[3,4]))

//Home Work
//find loop in linkedlist

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = this.head;
//     this.size = 0;
//   }

//     /*reverse linkedList*/
//     reverse(){
//         let prev=null
//         let curr=this.head
//         while(curr){
//           let next=curr.next
//           curr.next=prev
//             prev=curr
//             curr=next
    
//         }this.head=prev
//       }
// /*add node at front LinkList */
// print(){
//     if(this.size==0){
//         console.log('khaali hai')
//     }else{
//         let curr=this.head
//         let listValue=''
//         while(curr){
//             listValue +=curr.value
//             curr = curr.next
//         }
//         console.log(listValue)
//     }
// }
// add(value) {
//     const node = new Node(value);
//     if (this.size === 0) {
//       this.head = node;
//     } else {
//       node.next = this.head.next;
//       this.head = node;
//     }
//     this.size++;
//   }


// }
// const list = new LinkedList();

// list.add(10);
// list.add(20);
// list.print()
// list.add(30);
// // list.add(40);
// //list.reverse()
// //list.print()



//________________________________________________reverse linked list______________________
//leetcod  code 206
var reverseList = function(head) {
    let prev = null
    let curr = head
    let next = null
    
    while(curr!== null){
        // save next
        next = curr.next
        // reverse
        curr.next = prev
        // advance prev and curr
        prev = curr
        curr = next
    }
    return prev;
};


// recursive

var reverseList = function(head) {
	// base case
    if (head == null || head.next == null){
        return head;
    }
	// go all the way to the end
    let reversedListHead = reverseList(head.next)
	// add reverse myself
    head.next.next = head;
    head.next = null;
	// go up
    return reversedListHead
};

// another way

function reverseList(head) {
    let [prev, current] = [null, head]
    while(current) {
        [current.next, prev, current] = [prev, current, current.next]
    }
    return prev
}

//________________________Middle of the linked list - Leetcode 876____________

var middleNode = function(head) {
    let slow = head;
    let fast = head;
    
    while(fast) {
        if (!fast.next) break;
        fast = fast.next.next;
        slow = slow.next;
    }
    
    return slow;
};

let a=5
b=a
a=10
console.log("a",a)