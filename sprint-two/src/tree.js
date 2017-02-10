var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
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



/*
 * Complexity: What is the time complexity of the above functions?
 */
