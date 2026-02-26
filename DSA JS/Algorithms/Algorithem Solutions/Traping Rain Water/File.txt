
Trapping Rain Algorithm:

===> Elevation  Pictures has been downloaded from the Leedcode !

 You can check the picture in given DSA lectures for understanding thsi problem

In this problem we have an elevation by this we used to calculate the measure number or length of it how 






function trapRainWater(height) {
  const n = height.length

  // Agar array chhota hai, paani trap hi nahi hoga
  if (n < 3) return 0

  const leftMax = new Array(n)
  const rightMax = new Array(n)

  // Step 1: Left max array banao
  leftMax[0] = height[0]
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i])
  }

  // Step 2: Right max array banao
  rightMax[n - 1] = height[n - 1]
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i])
  }

  // Step 3: Har index par water calculate karo
  let trappedWater = 0
  for (let i = 0; i < n; i++) {
    trappedWater += Math.min(leftMax[i], rightMax[i]) - height[i]
  }

  return trappedWater
}

// Example
console.log(trapRainWater([4, 2, 0, 3, 2, 5])) // Output: 9






