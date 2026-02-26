Given a sorted array and a target value:

Agar target array me mil jaye → uska index return karo

Agar target nahi mile → jis index par insert karna chahiye wo return karo


Input:  arr = [1,3,5,6], target = 5
Output: 2

Input:  arr = [1,3,5,6], target = 2
Output: 1

Input:  arr = [1,3,5,6], target = 7
Output: 4

function searchInsert(arr, target) {
  let first = 0;
  let last = arr.length - 1;

  while (first <= last) {
    let mid = Math.floor((first + last) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      first = mid + 1;
    } else {
      last = mid - 1;
    }
  }

  return first;
}





How the code is Working :


Step-by-Step Working (Short)

Start pointer → first

End pointer → last

Find middle → mid

Compare arr[mid] with target

Equal → return index

Smaller → search right

Larger → search left

Agar nahi mila → first position return




Time and space complexity :

⏱ O(log n)


