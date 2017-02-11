var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  newTree.parent = null;
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  child.parent = this;
  this.children.push(child);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }

  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }

  return false;
};

treeMethods.getDepth = function(tree) {
  var maxDepth = 1;

  var checkDepth = function(node, currentDepth) {

    if (node.children.length > 0) {
      currentDepth++;
      for (var i = 0; i < node.children.length; i++) {
        checkDepth(node.children[i], currentDepth);
      }
    } else if (currentDepth > maxDepth) {
      maxDepth = currentDepth;
    }
  };
  
  checkDepth(tree, 1);
  return maxDepth;
};

treeMethods.traverse = function(cb) {
  var queue = [this];

  while (queue.length > 0) {
    var currentNode = queue.shift();
    cb(currentNode);

    for (var i = 0; i < currentNode.children.length; i++) {
      queue.push(currentNode.children[i]);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
