var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    list.tail ? list.tail.next = node : list.head = node;
    list.tail = node;
  };

  list.removeHead = function() {
    var temp = list.head;
    var tempVal = temp.value;
    if (list.head.next !== null) {
      list.head = list.head.next;
    } else {
      list.head = null;
    }
  
    return tempVal;
  };

  list.contains = function(target) {
    for (var node = list.head; node !== null; node = node.next) {
      if (node.value === target) {
        return true;
      }
    }
    return false;
  };

  list.insertAfter = function(target, value) {
    var node = new Node(value);
    var currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === target) {
        if (currentNode === this.tail) {
          this.addToTail(value);
        } else {
          node.next = currentNode.next;
          currentNode.next = node;
        }
        return;
      }
      currentNode = currentNode.next;
    }

    throw new Error('target not found');
  };

  list.remove = function(value) {
    var currNode = this.head;
    while (currNode) {
      if (currNode.value === value) {
        this.removeHead(currNode);
      } else if (currNode.next && currNode.next.value === value) {
        currNode.next = currNode.next.next;
        return;
      }
      currNode = currNode.next;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail: O(1)
 * removeHead: O(1)
 * contains: O(n)
 * insertAfter: O(n)
 * remove: O(n)
 */
