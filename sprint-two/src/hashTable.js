

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var arr = [k, v];
  if (bucket === undefined) {
    var list = LinkedList();
    list.addToTail(arr);
    this._storage.set(index, list);
  } else {
    // for (var i = 0; i < bucket.length; i++) {
    //   if (bucket[i][0] === k) {
    //     bucket[i][1] = v;
    //   }
    // }
    // bucket.push(arr);
    var node = bucket.head;
    while (node) {
      if (node.value[0] === k) {
        node.value[1] = v;
        return;
      }
      node = node.next;
    }

    bucket.addToTail(arr);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var node = bucket.head;
  while (node) {
    if (node.value[0] === k) {
      return node.value[1];
    }
    node = node.next;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var node = bucket.head;
  while (node) {
    if (node.value[0] === k) {
      bucket.remove(node.value);
      return;
    }
    node = node.next;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 *
 * insert: closer to O(1) on average, O(n) worst case
 * retrieve: O(1)
 * remove: O(1)
 *
 */


