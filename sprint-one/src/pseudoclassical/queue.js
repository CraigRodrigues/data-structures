var Queue = function() {
  this.length = 0;
  this.first = 0;
  this.last = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.last++] = value;
  this.length++;
};

Queue.prototype.dequeue = function() {
  if (this.length > 0) {
    var item = this.storage[this.first++];
    delete this.storage[this.first - 1];
    this.length--;

    return item;
  }
};

Queue.prototype.size = function() {
  return this.length;
};