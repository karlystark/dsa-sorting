/**bubbleSort: given an array, will sort the values in the array in-place and return
 * sorted array.
 */
function bubbleSort(arr) {

  // [4, 20, 12, 10 , 7, 9] ==> [4, 7, 9, 10, 12, 20]

  // [4, 9, 7, 12, 10, 20]

  // two loops - outer loop loops from i to end of array
    // inner loop (j) - sliding door, j to j+1
      // if arr[j] > arr[j+1], then swap values
  // return array

  for (let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j+1]
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;

// let i = 0;
// let j = i+1;

//   while(i < arr.length && j < arr.length){
//     let num1 = arr[i]
//     let num2 = arr[j]
//     let temp;

//     if(num2 < num1){
//       temp = num2;
//       arr[j] = arr[i];
//       arr[i] = temp;
//     }

//     i = j;
//     j++;
//   }

//   return arr;
}

module.exports = bubbleSort;