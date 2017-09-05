/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const m = grid.length, n = grid[0].length;
    const dp = Array.apply(null, Array(m+1)).map(row => new Array(n+1).fill(0));
    for ( let i = 1 ; i < dp.length ; i ++ ){
        for ( let j = 1 ; j < dp[i].length ; j ++ ){
            if ( i === 1 ) dp[i][j] = dp[i][j-1] + grid[i-1][j-1];
            else if ( j === 1 ) dp[i][j] = dp[i-1][j] + grid[i-1][j-1];
            else dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i-1][j-1]; 
        }
    }
    return dp[m][n];
};