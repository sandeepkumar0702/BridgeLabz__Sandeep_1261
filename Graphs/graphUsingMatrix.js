class Graph {
    constructor(size) {
      this.size=size;
      this.matrix=Array.from({length:size},()=>  /// form to ctare array of size size 
        Array(size).fill(0) //array conatisn  rows of size size and fill it with 0
      );
    //   let arr=[];
    //   for(let i=0;i<size;i++){
    //     let curr=[];
    //     for(let j=0;j<size;j++){
    //         curr.push(0);
    //     }
    //     arr.push(curr);
    //   }
    //   this.matrix=arr;
    //   this.matrix=Array.from({ length: size }, () => Array(size).fill(0));
    }
    addEdge(v1,v2){
      this.matrix[v1][v2]=1; 
    }
    removeEdge(v1,v2){
      this.matrix[v1][v2]=0;
    }
    printGraph(){
        this.matrix.forEach(row=>{
            console.log(row);
        });
    }
}
const graph=new Graph(3);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);  
graph.printGraph();

  