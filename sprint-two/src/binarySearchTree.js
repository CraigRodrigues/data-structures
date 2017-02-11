var BinarySearchTree = function(value) {
  var tree = Object.create(BSTMethods);

  tree.value = value;
  tree.right = null;
  tree.left = null;

  return tree;
};

var BSTMethods = {
  insert: function(value) {
    if (value > this.value) {
      if (this.right === null) {
        this.right = BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    } else {
      if (this.left === null) {
        this.left = BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    }
  },
  contains: function(value) {
    if (this.value === value) {
      return true;
    } else if (this.right && value > this.value) {
      return this.right.contains(value);
    } else if (this.left && value < this.value) {
      return this.left.contains(value);
    }

    return false;
  },
  depthFirstLog: function(cb) {
    cb(this.value);
    if (this.left) {
      this.left.depthFirstLog(cb);
    }
    if (this.right) {
      this.right.depthFirstLog(cb);
    }
  },
  breadthFirstLog: function(cb) {
    var queue = [];
    queue.push(this);

    while (queue.length > 0) {
      var currentNode = queue.shift();
      cb(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  } 
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(log(n))
 * contains: O(log(n))
 * depthFirstLog: O(n)
 * breadthFirstLog: O(n)
 */
