// Queue Implementation
let queue = [];

// Enqueue item to queue (adds to the rear)
function enqueueToQueue(item) {
  queue.push(item);
  updateQueueDisplay();
}

// Dequeue item from the front of queue (removes from the front)
function dequeueFromFront() {
  if (queue.length > 0) {
    queue.shift();  // Remove from the front
  } else {
    alert('Queue is empty!');
  }
  updateQueueDisplay();
}

// Dequeue item from the rear of queue (removes from the rear)
function dequeueFromRear() {
  if (queue.length > 0) {
    queue.pop();  // Remove from the rear
  } else {
    alert('Queue is empty!');
  }
  updateQueueDisplay();
}

// View the item at the front of the queue
function viewFront() {
  if (queue.length > 0) {
    alert(`Front item: ${queue[0]}`);
  } else {
    alert('Queue is empty!');
  }
}

// View the item at the rear of the queue
function viewRear() {
  if (queue.length > 0) {
    alert(`Rear item: ${queue[queue.length - 1]}`);
  } else {
    alert('Queue is empty!');
  }
}

// Check if the queue is empty
function isEmpty() {
  alert(queue.length === 0 ? 'Queue is empty!' : 'Queue is not empty!');
}

// Get the size of the queue
function getQueueSize() {
  alert(`Queue size: ${queue.length}`);
}

// Clear the queue
function clearQueue() {
  queue = [];
  updateQueueDisplay();
}

// Update the queue display
function updateQueueDisplay() {
  document.getElementById('queue-display').innerText = `Queue: [${queue.join(', ')}]`;
}

// Event listeners for button clicks
document.getElementById('enqueue-btn').addEventListener('click', () => {
  const item = prompt('Enter an item to enqueue:');
  if (item) {
    enqueueToQueue(item);
  } else {
    alert('Please enter a valid item!');
  }
});

document.getElementById('dequeue-front-btn').addEventListener('click', () => {
  dequeueFromFront();
});

document.getElementById('dequeue-rear-btn').addEventListener('click', () => {
  dequeueFromRear();
});

document.getElementById('front-btn').addEventListener('click', () => {
  viewFront();
});

document.getElementById('rear-btn').addEventListener('click', () => {
  viewRear();
});

document.getElementById('is-empty-btn').addEventListener('click', () => {
  isEmpty();
});

document.getElementById('size-btn').addEventListener('click', () => {
  getQueueSize();
});

document.getElementById('clear-btn').addEventListener('click', () => {
  clearQueue();
});
