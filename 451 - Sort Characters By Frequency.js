/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = {};
    for (let i = 0; i < s.length; i ++ ){
        map[s[i]] = map[s[i]] === undefined ? 1 : map[s[i]] + 1 ;
    }
    return Object.keys(map)
        .map(key => {
          return { key : key , amount : map[key] };
        })
        .sort((e1, e2) => {
          if ( e1.amount !== e2.amount ) return e2.amount - e1.amount;
          else return e1.key < e2.key ? -1 : 1;
        })
        .reduce((cal, el) => cal + Array(el.amount+1).join(el.key), "")
};