// Graph in Adjacency List

export default class Graph {
  constructor(numberOfVertices) {
    this.numberOfVertices = numberOfVertices;
    this.adjList = new Map();
  }

  // It adds the vertex v as key to adjList and initialize its values with an array.
  addVertex(v) {
    this.adjList.set(v, []);
  }

  // It adds an edge between the source and destination
  addEdge(v, w) {
    // get the list for vertex v and put the
    // vertex w denoting edge between v and w
    this.adjList.get(v).push(w);

    // Since graph is undirected,
    // add an edge from w to v also
    this.adjList.get(w).push(v);
  }

  // Prints the vertex and adjacency list
  printGraph() {
    // get all the vertices
    let get_keys = this.adjList.keys();

    // iterate over the vertices
    for (let i of get_keys) {
      // great the corresponding adjacency list
      // for the vertex
      let get_values = this.adjList.get(i);
      let conc = "";

      // iterate over the adjacency list
      // concatenate the values into a string
      for (let j of get_values) conc += j + " ";

      // print the vertex and its adjacency list
      console.log(i + " -> " + conc);
    }
  }
}
