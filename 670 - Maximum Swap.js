/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    let arr = (num + '').split('');
    for ( let i = 0 ; i < arr.length ; i ++ ){
        let maxIndex = i, maxNum = -1 ;
        for ( let j = i + 1 ; j < arr.length ; j ++ ){
            if (arr[maxIndex] < arr[j] || ( maxIndex !== i && arr[maxIndex] === arr[j] ) ){
                maxIndex = j;
                maxNum = arr[j];
            }
        }
        if ( maxIndex !== i ){
            let temp = arr[i];
            arr[i] = arr[maxIndex];
            arr[maxIndex] = temp;
            return parseInt(arr.join(''));
        }
    }
    return num;
};