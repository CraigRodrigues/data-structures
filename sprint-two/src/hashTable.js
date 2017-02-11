var HashTable = function(limit) {
  this._limit = limit || 8;
  this._bucketsFilled = 0;
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
    this._bucketsFilled++;
  } else {
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
  if (this._bucketsFilled >= 0.75 * this._limit) {
    this.doubleSize();
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

HashTable.prototype.doubleSize = function() {
  var newHashTable = new HashTable(this._limit * 2);

  this._storage.each(function(bucket) {
    if (bucket) {
      var node = bucket.head;
      while (node) {
        newHashTable.insert(node.value[0], node.value[1]);
        node = node.next;
      }
    }
  });

  this._storage = newHashTable._storage;
  this._limit = newHashTable._limit;
  this._bucketsFilled = newHashTable._bucketsFilled;
};


/*
 * Complexity: What is the time complexity of the above functions?
 *
 * insert: closer to O(1) on average, O(n) worst case
 * retrieve: O(1)
 * remove: O(1)
 * doubleSize: O(n)
 */


