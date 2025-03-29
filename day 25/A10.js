function addItem(array, item) {
    array.push(item);
    return array;
  }
  const myArray = [1, 2, 3];
  const updatedArray = addItem(myArray, 4);
  
  console.log(updatedArray);