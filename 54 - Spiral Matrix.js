/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if ( matrix.length === 0 ) return [];
  let bool = matrix.slice().map(rows => rows.map(el => false));
  let result = [];
  let currentDir = 'e';
  const dirs = ['e', 's', 'w', 'n', 'e'];
  const dxs = [0, 1, 0, -1, 0];
  const dys = [1, 0, -1, 0, 1];
    
  const checkValid = (x, y, dir) => {
    switch(dir){
      case 'e': return y < bool[x].length - 1 && !bool[x][y+1];
      case 's': return x < bool.length - 1 && !bool[x+1][y];
      case 'w': return y >= 1 && !bool[x][y-1];
      case 'n': return x >= 1 && !bool[x-1][y];
    }
  }  
    
  const loop = (x ,y, dir) => {
    if ( bool[x][y] ) return ;
    
    bool[x][y] = true;
    result.push(matrix[x][y]);

    let dirIndex = dirs.indexOf(dir);
    
    if( !checkValid(x, y, dir) ){
      dirIndex ++ ;
      if ( checkValid(x, y, dirs[dirIndex]) ){
        loop(x + dxs[dirIndex], y + dys[dirIndex], dirs[dirIndex]);
      }
    } else {
      loop(x + dxs[dirIndex], y + dys[dirIndex], dir);
    }
  }
  loop(0, 0, dirs[0]);
  return result;
};