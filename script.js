function lastElement (arr) {
    if(arr.length === 0) {
        return null;
    }
    return arr[arr.length-1];
}

console.log('Test');
console.log(lastElement([3, 5, 7]));
console.log(lastElement([1]));
console.log(lastElement([]));