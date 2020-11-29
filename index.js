import LinkedList from "./LinkedList.js";

// Algox

// Linear Data Structures
// Stack
// Array

// Non Linear Data Structures
// Linked List
// Hash Table
// Queue
// Graph

const list = new LinkedList();
let i = 0;
while (i < 10) {
  list.add(i);
  i++;
}
console.log(JSON.stringify(list));
