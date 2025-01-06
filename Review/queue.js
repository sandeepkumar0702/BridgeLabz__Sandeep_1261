let grid=[[1,0,0,1,1,0],[0,1,0,0,1,1],[1,1,0,0,1]];
class pair{
    constructor(i,j){
        this.i=i;
        this.j=j;
    }
}
function minTime(grid){
    let q=[];
    let n=grid.length;
    let isvisited=[];
    for(let  i=0;i<grid.length;i++){
        let curr=[];
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]==1){
                q.push([i,j]);
                curr[j]=1;
            }
            else{
                curr[j]=0;
            }
        }
        isvisited.push(curr);
    }
    let ans=0;
    while(q.length>0){
        let size=q.length;
        for(let k=0;k<size;k++){
            let curr=q.shift();
            let i=curr[0],j=curr[1];
            if(i>0){
                if(isvisited[i-1][j]==0){
                    isvisited[i-1][j]=1;
                    q.push([i-1,j]);
                }
            }
            if(i<n-1){
                if(isvisited[i+1][j]==0){
                    isvisited[i+1][j]=1;
                    q.push([i+1,j]);
                }
            }
            if(j>0){
                if(isvisited[i][j-1]==0){
                isvisited[i][j-1]=1;
                q.push([i,j-1]);
                }
            }
            if(j<n-1){
                if(isvisited[i][j+1]==0){
                    isvisited[i][j+1]=1;
                    q.push([i,j+1]);
                }
            }
        }
        ans++;
    }
    return ans;
}
console.log(minTime(grid));