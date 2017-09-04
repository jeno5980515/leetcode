/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0;
    let bool = Array.apply(null, Array(s.length+1)).map(row => new Array(s.length+1).fill(true));
    for ( var i = s.length - 1 ; i >= 0 ; i -- ){
        for ( var j = i + 1 ; j < s.length ; j ++ ){
            if ( s[i] === s[j] && bool[i+1][j-1] === true ){
                bool[i+1][j-1] = true;
                count ++;
            } else {
                bool[i][j] = false;
            }
        }
    }
    return count + s.length;
};
