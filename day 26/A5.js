function removeItem(arr, index) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === index) continue;
        result.push(arr[i]);
    }
    return result;
}

const originalArray = [1, 2, 3, 4];
console.log("Original array: ", originalArray);
console.log("After removal: ", removeItem(originalArray, 2)); 