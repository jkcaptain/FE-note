class Graph {
  constructor(v) {
    this.vertices = v;
    this.edges = 0;

    this.adj = [];
    for (let i = 0; i < v; i++) {
      this.adj[i] = [];
    }

    this.marked = new Array(v).fill(false);

    this.edgeTo = [];
  }

  addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
  }

  showGraph() {
    for (let i = 0; i < this.vertices; i++) {
      const val = this.adj[i];
      console.log(i, '-------------', val.join(','));
    }
  }

  // 深度优先
  dfs(v) {
    this.marked[v] = true;
    for (let p of this.vertices[v]) {
      if (!this.marked[p]) {
        this.dfs(p);
      }
    }
  }

  // 广度优先
  bfs(v) {
    let queue = [];

    this.marked[v] = true;
    queue.push(v);

    while (queue.length > 0) {
      let v = queue.shift();
      console.log('vvvvvvvvvvvvvvvvvvvvvvvvvv', v);
      for (let s of this.adj[v]) {
        if (!this.marked[s]) {
          this.marked[s] = true;
          queue.push(s);
        }
      }
    }
  }
}
