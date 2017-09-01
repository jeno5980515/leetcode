/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  if ( n === 0 ) return [];
  let matrix = Array.apply(null, Array(n)).map(row => new Array(n));
  const dirs = ['e', 's', 'w', 'n', 'e'];
  const dxs = [0, 1, 0, -1, 0];
  const dys = [1, 0, -1, 0, 1];
    
  const checkValid = (x, y, dir) => {
    switch(dir){
      case 'e': return y < matrix[x].length - 1 && !matrix[x][y+1];
      case 's': return x < matrix.length - 1 && !matrix[x+1][y];
      case 'w': return y >= 1 && !matrix[x][y-1];
      case 'n': return x >= 1 && !matrix[x-1][y];
    }
  }  
    
  const loop = (x ,y, dir, number) => {
    if ( matrix[x][y] ) return ;
    
    matrix[x][y] = number;
    let dirIndex = dirs.indexOf(dir);
    
    if( !checkValid(x, y, dir) ){
      dirIndex ++ ;
      if ( checkValid(x, y, dirs[dirIndex]) ){
        loop(x + dxs[dirIndex], y + dys[dirIndex], dirs[dirIndex], number + 1);
      }
    } else {
      loop(x + dxs[dirIndex], y + dys[dirIndex], dir, number + 1);
    }
  }
  loop(0, 0, dirs[0], 1);
  return matrix;
};