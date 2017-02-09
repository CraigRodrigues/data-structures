var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    list.tail = node;
    if (list.head === null) {
      list.head = node;
    } else if (list.head.next === null) {
      list.head.next = node;
    }
  };

  list.removeHead = function() {
    var temp = list.head;
    var tempVal = temp.value;
    if (list.head.next !== null) {
      list.head = list.head.next;
    }
    delete temp;
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
 */
