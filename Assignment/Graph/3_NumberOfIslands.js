function numIslands(grid) {
    if (grid.length === 0) return 0;
    const rows = grid.length;
    const cols = grid[0].length;
    let islandCount = 0;
  
    const dfs = (r, c) => {
      if (
        r < 0 || 
        r >= rows || 
        c < 0 || 
        c >= cols || 
        grid[r][c] === "0"
      ) {
        return;
      }
  
      grid[r][c] = "0";
      dfs(r - 1, c); // up
      dfs(r + 1, c); // down
      dfs(r, c - 1); // left
      dfs(r, c + 1); // right
    };
  
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r][c] === "1") {
          islandCount++;
          dfs(r, c);
        }
      }
    }
  
    return islandCount;
  }
  
  const grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
  ];
  
  console.log(numIslands(grid)); 
  