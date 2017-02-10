

// Instantiate a new graph
var Graph = function() {
  this.vertices = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertices.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return _.contains(this.vertices, node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var index = _.indexOf(this.vertices, node);
  if (index > - 1) {
    this.vertices.splice(index, 1);
  }
  for (var i = 0; i < this.edges.length; i++) {
    if ((this.edges[i][0] === node || this.edges[i][1] === node)) {
      this.edges.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i++) {
    if ((this.edges[i][0] === fromNode && this.edges[i][1] === toNode) || 
        (this.edges[i][0] === toNode && this.edges[i][1] === fromNode)) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i++) {
    if ((this.edges[i][0] === fromNode && this.edges[i][1] === toNode) || 
        (this.edges[i][0] === toNode && this.edges[i][1] === fromNode)) {
      this.edges.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.vertices, cb);
};

Graph.prototype.longestPathFromNode = function(node) {
  var visited = {};
  var maxLength = 0;
  var edges = this.edges;
  
  var traverseGraph = function(node, currentLength = 0) {
    // add node to visited
    visited[node] = true;
    // iterate over connected nodes
    for (var i = 0; i < edges.length; i++) {
      // check if edge is for the node we are on
      if (edges[i].includes(node)) {
        // check if we havent visited node  
        // call traverseGraph on all connected nodes
        if (edges[i][0] === node && !visited[edges[i][1]]) {
          traverseGraph(edges[i][1], currentLength + 1);
        } else if (!visited[edges[i][0]]) { 
          traverseGraph(edges[i][0], currentLength + 1);  
        }
      }
    }
    // check if our length is > maxLength
    if (currentLength > maxLength) {
      maxLength = currentLength;
    }
  };

  traverseGraph(node, 0);
  return maxLength;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode: O(1)
 * contains: O(n)
 * removeNode: O(n)
 * hasEdge: O(n)
 * addEdge: O(1)
 * removeEdge: O(n)
 * forEachNode: O(n)
 * traverseGraph: O(n)
 */


