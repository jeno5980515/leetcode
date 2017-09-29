/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    
    const dp = Array(word1.length+1).fill(0).map(el => Array(word2.length+1).fill(0));
    for ( let i = 1 ; i <= word1.length ; i ++ ){
        for ( let j = 1 ; j <= word2.length ; j ++ ){
            dp[i][j] = (word1[i-1] === word2[j-1]) ? (dp[i-1][j-1] + 1) : Math.max(dp[i][j-1], dp[i-1][j]);
        }
    }
    return word1.length + word2.length - 2 * dp[word1.length][word2.length];
};