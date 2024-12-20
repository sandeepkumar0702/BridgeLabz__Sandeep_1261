class graph{
    constructor(){
        this.adjacencyList={};
        this.size=0;
    }

    printGraph(){
        console.log(this.adjacencyList);
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=[];
            this.size++;
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1);
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].push(vertex2);
    }
    removeEdge(vertex1,vertex2){
        if(this.adjacencyList[vertex1]){
            this.adjacencyList[vertex1]=this.adjacencyList[vertex1].filter((v)=>{
                return v!==vertex2;
            })
        }
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex]!==0){
            let vertex1=this.adjacencyList[vertex].pop();
            this.removeEdge(vertex1,vertex);
        }
        delete this.adjacencyList[vertex];
    }
    bfs(start){
        let arr=[];
        let isVisted=Array(this.size+1).fill(0);
        arr.push(start);
        isVisted[start]=1;
        while(arr.length>0){
            let ele=arr.shift();
            console.log(ele);
            this.adjacencyList[ele].forEach(element => {
                if(isVisted[element]===0){
                    isVisted[element]=1;
                    arr.push(element);
                }

            });
        }
    }
    dfsTranversal(start){
        let isVisted=Array(this.size+1).fill(0);
        console.log(isVisted);
        return this.dfs(isVisted,start);
    }

    dfs(isVisted,start){
        console.log(start);
        isVisted[start]=1;
        let curr=this.adjacencyList[start];
        for(let v of curr){
            if(isVisted[v]===0){
                this.dfs(isVisted,v);
            }
        }
    }
}
let Graph=new graph();
Graph.addEdge(1,2);
Graph.addEdge(2,3);
Graph.addEdge(2,4);
Graph.addEdge(4,5);
Graph.addEdge(3,5);
// Graph.removeEdge(5,3);
Graph.printGraph();

// Graph.bfs(1);
Graph.dfsTranversal(1);
