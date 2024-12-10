class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  let head = null;
  
  // Insert item at the beginning of the linked list (adds node at the front)
  function insertAtBeginning(value) {
    const newNode = new Node(value);
    newNode.next = head;
    head = newNode;
    updateLinkedListDisplay();
  }
  
  // Insert item at the end of the linked list (adds node to the rear)
  function insertAtEnd(value) {
    const newNode = new Node(value);
    if (head === null) {
      head = newNode;
    } else {
      let current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    updateLinkedListDisplay();
  }
  
  // Insert item at a specific position in the linked list (add node at any given position)
  function insertAtPosition(value, position) {
    const newNode = new Node(value);
    if (position === 0) {
      newNode.next = head;
      head = newNode;
    } else {
      let current = head;
      let count = 0;
      while (current !== null && count < position - 1) {
        current = current.next;
        count++;
      }
      if (current !== null) {
        newNode.next = current.next;
        current.next = newNode;
      } else {
        alert('Position out of bounds!');
      }
    }
    updateLinkedListDisplay();
  }
  
  // Delete item from the front of the linked list (removes the head)
  function deleteFromFront() {
    if (head !== null) {
      head = head.next;
    } else {
      alert('Linked List is empty!');
    }
    updateLinkedListDisplay();
  }
  
  // Delete item from the rear of the linked list (removes the last node)
  function deleteFromRear() {
    if (head === null) {
      alert('Linked List is empty!');
      return;
    }
  
    if (head.next === null) {
      head = null; // If there's only one node
    } else {
      let current = head;
      while (current.next && current.next.next) {
        current = current.next;
      }
      current.next = null; // Remove the last node
    }
    updateLinkedListDisplay();
  }
  
  // Reverse the linked list
  function reverseLinkedList() {
    let prev = null;
    let current = head;
    while (current !== null) {
      let nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }
    head = prev;
    updateLinkedListDisplay();
  }
  
  // Sort the linked list
  function sortLinkedList() {
    if (head === null || head.next === null) return; // No need to sort if the list is empty or has one element
  
    // Step 1: Collect values from the linked list into an array
    let current = head;
    const values = [];
    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }
  
    // Step 2: Sort the array of values (ascending order)
    values.sort((a, b) => a - b); // Sort numbers in ascending order
  
    // Step 3: Rebuild the linked list from the sorted values
    current = head;
    let i = 0;
    while (current !== null) {
      current.value = values[i++];
      current = current.next;
    }
  
    updateLinkedListDisplay();
  }
  
  // Display linked list content
  function updateLinkedListDisplay() {
    let current = head;
    const values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    document.getElementById('linkedlist-display').innerText = `Linked List: ${values.join(' -> ')}`;
  }
  
  // Event listeners for button clicks
  document.getElementById('insert-beginning-btn').addEventListener('click', () => {
    const value = prompt('Enter a value to insert at the beginning of the linked list:');
    if (value) {
      insertAtBeginning(value);
    } else {
      alert('Please enter a valid value!');
    }
  });
  
  document.getElementById('insert-end-btn').addEventListener('click', () => {
    const value = prompt('Enter a value to insert at the end of the linked list:');
    if (value) {
      insertAtEnd(value);
    } else {
      alert('Please enter a valid value!');
    }
  });
  
  document.getElementById('insert-position-btn').addEventListener('click', () => {
    const value = prompt('Enter a value to insert at a specific position in the linked list:');
    const position = parseInt(prompt('Enter position (index) to insert the value (0-indexed):'));
    if (value && !isNaN(position)) {
      insertAtPosition(value, position);
    } else {
      alert('Please enter a valid value and position!');
    }
  });
  
  document.getElementById('delete-front-btn').addEventListener('click', () => {
    deleteFromFront();
  });
  
  document.getElementById('delete-rear-btn').addEventListener('click', () => {
    deleteFromRear();
  });
  
  document.getElementById('reverse-btn').addEventListener('click', () => {
    reverseLinkedList();
  });
  
  document.getElementById('sort-btn').addEventListener('click', () => {
    sortLinkedList();
  });
  