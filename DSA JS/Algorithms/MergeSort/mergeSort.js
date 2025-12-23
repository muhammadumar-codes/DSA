function conquer(arr, first, mid, last) {
  let temp = new Array(last - first + 1);
  let i = first,
    j = mid + 1,
    k = 0;

  while (i <= mid && j <= last) {
    if (arr[i] <= arr[j]) {
      temp[k++] = arr[i++];
    } else {
      temp[k++] = arr[j++];
    }
  }

  while (i <= mid) {
    temp[k++] = arr[i++];
  }

  while (j <= last) {
    temp[k++] = arr[j++];
  }

  // copy temp back to arr
  for (let x = 0; x < temp.length; x++) {
    arr[first + x] = temp[x];
  }
}

function divide(arr, first, last) {
  if (first >= last) return;

  let mid = Math.floor((first + last) / 2);

  divide(arr, first, mid); // left part
  divide(arr, mid + 1, last); // right part

  conquer(arr, first, mid, last); // merge
}
