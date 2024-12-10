class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let root = null;

// Insert a node into the binary tree
function insertNode(value) {
  const newNode = new Node(value);

  if (root === null) {
    root = newNode;
  } else {
    insertRecursively(root, newNode);
  }
  updateBinaryTreeDisplay();
}

function insertRecursively(node, newNode) {
  if (newNode.value < node.value) {
    if (node.left === null) {
      node.left = newNode;
    } else {
      insertRecursively(node.left, newNode);
    }
  } else {
    if (node.right === null) {
      node.right = newNode;
    } else {
      insertRecursively(node.right, newNode);
    }
  }
}

// Delete a node from the binary tree
function deleteNode(value) {
  root = deleteRecursively(root, value);
  updateBinaryTreeDisplay();
}

function deleteRecursively(node, value) {
  if (node === null) {
    return null;
  }

  if (value < node.value) {
    node.left = deleteRecursively(node.left, value);
  } else if (value > node.value) {
    node.right = deleteRecursively(node.right, value);
  } else {
    if (node.left === null && node.right === null) {
      return null;
    } else if (node.left === null) {
      return node.right;
    } else if (node.right === null) {
      return node.left;
    } else {
      const minValueNode = findMinNode(node.right);
      node.value = minValueNode.value;
      node.right = deleteRecursively(node.right, minValueNode.value);
    }
  }
  return node;
}

function findMinNode(node) {
  while (node.left !== null) {
    node = node.left;
  }
  return node;
}

// Search for a node in the binary tree
function searchNode(value) {
  const found = searchRecursively(root, value);
  if (found) {
    alert(`Node with value ${value} found!`);
  } else {
    alert(`Node with value ${value} not found!`);
  }
}

function searchRecursively(node, value) {
  if (node === null) return null;
  if (value === node.value) return node;
  if (value < node.value) return searchRecursively(node.left, value);
  return searchRecursively(node.right, value);
}

// In-order traversal (left, root, right)
function inOrderTraversal() {
  const values = [];
  inOrderRecursively(root, values);
  alert('In-Order Traversal: ' + values.join(', '));
}

function inOrderRecursively(node, values) {
  if (node === null) return;
  inOrderRecursively(node.left, values);
  values.push(node.value);
  inOrderRecursively(node.right, values);
}

// Pre-order traversal (root, left, right)
function preOrderTraversal() {
  const values = [];
  preOrderRecursively(root, values);
  alert('Pre-Order Traversal: ' + values.join(', '));
}

function preOrderRecursively(node, values) {
  if (node === null) return;
  values.push(node.value);
  preOrderRecursively(node.left, values);
  preOrderRecursively(node.right, values);
}

// Post-order traversal (left, right, root)
function postOrderTraversal() {
  const values = [];
  postOrderRecursively(root, values);
  alert('Post-Order Traversal: ' + values.join(', '));
}

function postOrderRecursively(node, values) {
  if (node === null) return;
  postOrderRecursively(node.left, values);
  postOrderRecursively(node.right, values);
  values.push(node.value);
}

// Level-order traversal (Breadth-First Search)
function levelOrderTraversal() {
  if (!root) {
    alert('Tree is empty!');
    return;
  }
  const queue = [root];
  const values = [];
  while (queue.length > 0) {
    const node = queue.shift();
    values.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  alert('Level-Order Traversal: ' + values.join(', '));
}

// Display the binary tree content
function updateBinaryTreeDisplay() {
  let values = [];
  inOrderRecursively(root, values); // In-order traversal for sorted display
  document.getElementById('binary-tree-display').innerText = `Binary Tree: [${values.join(', ')}]`;
}

// Event listeners for button clicks
document.getElementById('insert-btn').addEventListener('click', () => {
  const value = prompt('Enter a value to insert into the binary tree:');
  if (value) {
    insertNode(parseInt(value));
  } else {
    alert('Please enter a valid value!');
  }
});

document.getElementById('delete-btn').addEventListener('click', () => {
  const value = prompt('Enter a value to delete from the binary tree:');
  if (value) {
    deleteNode(parseInt(value));
  } else {
    alert('Please enter a valid value!');
  }
});

document.getElementById('search-btn').addEventListener('click', () => {
  const value = prompt('Enter a value to search in the binary tree:');
  if (value) {
    searchNode(parseInt(value));
  } else {
    alert('Please enter a valid value!');
  }
});

document.getElementById('inorder-btn').addEventListener('click', inOrderTraversal);
document.getElementById('preorder-btn').addEventListener('click', preOrderTraversal);
document.getElementById('postorder-btn').addEventListener('click', postOrderTraversal);
document.getElementById('levelorder-btn').addEventListener('click', levelOrderTraversal);
