/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if ( s.length <= 1 ) return s ;
    var nowMax = 1 , nowString = s[s.length-1] ;
    var dp = new Array(s.length+1);
    var copy = new Array(s.length+1);
    for (var i = 0; i < s.length+1 ; i++) {
        copy[i] = true ;
    }
    for (var i = 0 ; i < s.length+1; i++){
        dp[i] = copy.slice(0);
    }
    for ( var i = s.length - 1 ; i >= 0 ; i -- ){
        for ( var j = i + 1 ; j < s.length ; j ++ ){
            if ( s[i] === s[j] && dp[i+1][j-1] !== false ){
                dp[i][j] = true ;
                if ( j - i + 1 > nowMax ){
                    nowMax = j - i + 1 ;
                    nowString = s.substring(i,j+1) ;
                }
            } else {
                dp[i][j] = false ;
            }
        }
    }
    return nowString ;
};