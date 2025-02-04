// Given an array of positive integers arr[] of size n,
//  the task is to find second largest distinct element in the array.

// Input: arr[] = [12, 35, 1, 10, 34, 1]
// Output: 34
// Explanation: The largest element of the array is 35 and the second largest element is 34.
// Input: arr[] = [10, 5, 10]
// Output: 5
// Explanation: The largest element of the array is 10 and the second largest element is 5.
// Input: arr[] = [10, 10, 10]
// Output: -1
// Explanation: The largest element of the array is 10 there is no second largest element.

function SecondLargestElement(arr) {
  let largest = -1,
    secondLargest = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargest && arr[i] !== largest) secondLargest = arr[i];
  }
  return secondLargest;
}

console.log(SecondLargestElement([12, 35, 1, 10, 34, 1]));
