module.exports = function transform(arr) {
    if (!(arr instanceof Array)) {throw new Error()};
    if (arr.length == 0) return arr;
    let arrlength = arr.length;
    let transformArray = [];
    for (let i = 0; i < arrlength; i++) {
        if (arr[i] === '--discard-next') {
            if (arrlength - 1 > i) {
                i++;
            }
        } else if (arr[i] === '--discard-prev') {
            if (i > 0) {
                transformArray.pop();
            }
        } else if (arr[i] === '--double-next') {
            if (arrlength - 1 > i) {
                transformArray.push(arr[i + 1]);
            }
        } else if (arr[i] === '--double-prev') {
            if (i > 0) {
                transformArray.push(arr[i - 1]);
            }
        } else {
            transformArray.push(arr[i]);
        }
    }
    return transformArray;
};
