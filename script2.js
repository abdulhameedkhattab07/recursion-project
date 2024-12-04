function mergeSort(array){
    if (array.length <= 1) return array;

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    const sortedArray = [];

    while(left.length && right.length){
        if (left[0] <= right[0]){
            sortedArray.push(left.shift());
        } else{
            sortedArray.push(right.shift());
        }
    }

    return [...sortedArray, ...left, ...right];
}

console.log(mergeSort([3, 2, 2, 13, 8, 5, 0, 1, 34, 77, 900, 12, 67, 71]));