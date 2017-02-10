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
  contains: function() {

  },
  depthFirstLog: function() {

  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
