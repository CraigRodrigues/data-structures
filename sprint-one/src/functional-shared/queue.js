var Queue = function() {
  var queue = {};
  queue.storage = {};
  queue.length = 0;
  queue.first = 0;
  queue.last = 0;
  _.extend(queue, queueMethods);

  return queue;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.last++] = value;
    this.length++;
  },
  dequeue: function() {
    if (this.length > 0) {
      var item = this.storage[this.first++];
      delete this.storage[this.first - 1];
      this.length--;

      return item;
    }
  },
  size: function() {
    return this.length;
  }
};