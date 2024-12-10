// One-Dimensional Array Implementation
let oneDArray = [];

// Add item to one-dimensional array
function addToOneDArray(item) {
  oneDArray.push(item);
  updateOneDArrayDisplay();
}

// Remove item from one-dimensional array
function removeFromOneDArray() {
  if (oneDArray.length > 0) {
    oneDArray.pop();
  } else {
    alert('One-Dimensional Array is empty!');
  }
  updateOneDArrayDisplay();
}

// Access element in one-dimensional array
function accessOneDElement(index) {
  if (index >= 0 && index < oneDArray.length) {
    alert('Element at index ' + index + ': ' + oneDArray[index]);
  } else {
    alert('Index out of bounds!');
  }
}

// Display one-dimensional array content
function updateOneDArrayDisplay() {
  document.getElementById('one-d-array-display').innerText = `One-Dimensional Array: [${oneDArray.join(', ')}]`;
}

// Multi-Dimensional Array Implementation
let multiDArray = [];

// Add item to multi-dimensional array (at specific row and column)
function addToMultiDArray(row, col, item) {
  if (!multiDArray[row]) {
    multiDArray[row] = [];
  }
  multiDArray[row][col] = item;
  updateMultiDArrayDisplay();
}

// Remove item from multi-dimensional array (at specific row and column)
function removeFromMultiDArray(row, col) {
  if (multiDArray[row] && multiDArray[row][col] !== undefined) {
    multiDArray[row][col] = undefined;
  } else {
    alert('Invalid index or element does not exist!');
  }
  updateMultiDArrayDisplay();
}

// Access element in multi-dimensional array (at specific row and column)
function accessMultiDElement(row, col) {
  if (multiDArray[row] && multiDArray[row][col] !== undefined) {
    alert(`Element at [${row}][${col}]: ${multiDArray[row][col]}`);
  } else {
    alert('Invalid index or element does not exist!');
  }
}

// Flatten the multi-dimensional array into a one-dimensional array
function flattenMultiDArray() {
  const flattened = multiDArray.flat();
  alert('Flattened Array: ' + flattened.join(', '));
}

// Display multi-dimensional array content
function updateMultiDArrayDisplay() {
  document.getElementById('multi-d-array-display').innerText = `Multi-Dimensional Array: ${JSON.stringify(multiDArray)}`;
}

// Event listeners for button clicks
document.getElementById('add-one-d').addEventListener('click', () => {
  const item = prompt('Enter an item to add to the one-dimensional array:');
  if (item) {
    addToOneDArray(item);
  } else {
    alert('Please enter a valid item!');
  }
});

document.getElementById('remove-one-d').addEventListener('click', () => {
  removeFromOneDArray();
});

document.getElementById('access-one-d').addEventListener('click', () => {
  const index = prompt('Enter the index to access in the one-dimensional array:');
  if (index !== null) {
    accessOneDElement(parseInt(index));
  }
});

document.getElementById('add-multi-d').addEventListener('click', () => {
  const row = prompt('Enter the row index for multi-dimensional array:');
  const col = prompt('Enter the column index for multi-dimensional array:');
  const item = prompt('Enter the item to add:');
  if (row !== null && col !== null && item !== null) {
    addToMultiDArray(parseInt(row), parseInt(col), item);
  }
});

document.getElementById('remove-multi-d').addEventListener('click', () => {
  const row = prompt('Enter the row index to remove from:');
  const col = prompt('Enter the column index to remove from:');
  if (row !== null && col !== null) {
    removeFromMultiDArray(parseInt(row), parseInt(col));
  }
});

document.getElementById('access-multi-d').addEventListener('click', () => {
  const row = prompt('Enter the row index to access:');
  const col = prompt('Enter the column index to access:');
  if (row !== null && col !== null) {
    accessMultiDElement(parseInt(row), parseInt(col));
  }
});

document.getElementById('flatten-multi-d').addEventListener('click', () => {
  flattenMultiDArray();
});
