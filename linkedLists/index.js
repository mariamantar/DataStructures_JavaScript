// const n1 = {
//   data: 100
// };

// const n2 = {
//   data: 200
// }
// n1.next = n2;
// console.log(n1)

// A linked list is another way to implement abstract data structures. Every node has a reference to the next node in a linked list and elements are linked together using a pointer unlike in an array that are stored in sequential memory locations 


// Example #1
class Node {
  // constructor takes in the data and the pointer which is set to null by default as the tail has a reference to null
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const n1 = new Node(100);
console.log(n1);

// Example #2
class LinkedList {
  constructor() {
    // set to null by default as if there is no head/no element then the list is empty 
    this.head = null;
    this.size = 0;
  }

  // Insert first node 
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    // if empty, make head 
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // Insert at index

  // Get at index

  // Remove at index 

  // Clear list

  // Print list data
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

}

const linklist = new LinkedList();

linklist.insertFirst(100);
linklist.insertFirst(200);
linklist.insertLast(400);

linklist.printListData();