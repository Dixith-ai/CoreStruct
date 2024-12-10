// Stack Implementation
let stack = [];

// Push item to stack
function pushToStack(item) {
  stack.push(item);
  updateStackDisplay();
}

// Pop item from stack
function popFromStack() {
  if (stack.length > 0) {
    stack.pop();
  } else {
    alert('Stack is empty!');
  }
  updateStackDisplay();
}

// Peek at top item of stack
function peekAtTop() {
  if (stack.length > 0) {
    alert('Top item: ' + stack[stack.length - 1]);
  } else {
    alert('Stack is empty!');
  }
}

// Check if stack is empty
function isStackEmpty() {
  if (stack.length === 0) {
    alert('Stack is empty!');
  } else {
    alert('Stack is not empty!');
  }
}

// Get stack size
function getStackSize() {
  alert('Stack size: ' + stack.length);
}

// Clear the stack
function clearStack() {
  stack = [];
  updateStackDisplay();
}

// Display stack content
function updateStackDisplay() {
  document.getElementById('stack-display').innerText = `Stack: [${stack.join(', ')}]`;
}

// Event listeners for button clicks
document.getElementById('push-btn').addEventListener('click', () => {
  const item = prompt('Enter an item to push to the stack:');
  if (item) {
    pushToStack(item);
  } else {
    alert('Please enter a valid item!');
  }
});

document.getElementById('pop-btn').addEventListener('click', () => {
  popFromStack();
});

document.getElementById('peek-btn').addEventListener('click', () => {
  peekAtTop();
});

document.getElementById('is-empty-btn').addEventListener('click', () => {
  isStackEmpty();
});

document.getElementById('size-btn').addEventListener('click', () => {
  getStackSize();
});

document.getElementById('clear-btn').addEventListener('click', () => {
  clearStack();
});
