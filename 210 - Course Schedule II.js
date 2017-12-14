/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const isVisited = new Array(numCourses).fill(false);
  const isRecursived = new Array(numCourses).fill(false);
  const order = [];
  let isFound = false;
  const map = Array.apply(null, Array(numCourses)).map(() => []);
  prerequisites.forEach(edge => map[edge[0]].push(edge[1]));
  const dfs = (index) => {
    if ( isRecursived[index] ) {
      isFound = true;
    }
    if ( isFound || isVisited[index] ) return;
    isVisited[index] = true;
    isRecursived[index] = true;
    map[index].forEach(dfs);
    order.push(index);
    isRecursived[index] = false;
  }
  isVisited.forEach((v, index) => dfs(index));
  return !isFound ? order : [];
};