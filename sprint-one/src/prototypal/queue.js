var Queue = function() {
  var queue = Object.create(queueMethods);
  queue.storage = {};
  queue.first = 0;
  queue.last = 0;
  queue.length = 0;

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


