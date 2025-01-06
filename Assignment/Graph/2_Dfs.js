class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) {
        this.adjacencyList.set(vertex, []);
      }
    }
    addEdge(v1, v2) {
      if (this.adjacencyList.has(v1) && this.adjacencyList.has(v2)) {
        this.adjacencyList.get(v1).push(v2);
        this.adjacencyList.get(v2).push(v1);
      }
    }
  
    dfs(startingNode) {
      const visited = new Set();
      const result = [];
  
      const dfsHelper = (node) => {
        visited.add(node);
        result.push(node);
  
        for (const neighbor of this.adjacencyList.get(node)) {
          if (!visited.has(neighbor)) {
            dfsHelper(neighbor);
          }
        }
      };
  
    dfsHelper(startingNode);
      return result;
    }
  }
  const graph = new Graph();
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addVertex("E");
  graph.addVertex("F");
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "D");
  graph.addEdge("C", "E");
  graph.addEdge("D", "F");
  graph.addEdge("E", "F");
  console.log(graph.dfs("A"));
  