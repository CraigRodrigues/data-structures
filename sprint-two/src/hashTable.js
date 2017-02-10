

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var value = this._storage.get(index);
  var obj = {};
  obj[k] = v;
  if (value === undefined) {
    this._storage.set(index, obj);
  } else {
    this._storage.set(index, _.extend(value, obj));
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var value = this._storage.get(index);

  if (value.hasOwnProperty(k)) {
    return value[k];
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var value = this._storage.get(index);
  delete value[k];
};



/*
 * Complexity: What is the time complexity of the above functions?
 *
 * insert: O(1)
 * retrieve: O(1)
 * remove: O(1)
 *
 */


