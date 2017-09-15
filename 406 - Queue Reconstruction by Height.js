/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people.sort((p1, p2) => p1[0] === p2[0] ? p1[1] - p2[1] : p2[0] - p1[0] )
    return people.reduce((cal, p, index) => {
        cal.splice(p[1], 0, p);
        return cal;
    }, [])
};