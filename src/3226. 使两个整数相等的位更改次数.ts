// https://leetcode.cn/problems/first-completely-painted-row-or-column/?envType=daily-question&envId=2023-12-01

// 3226. 使两个整数相等的位更改次数
function minChanges(nums1: number, nums2: number): number {
  let num1: string = nums1.toString(2);
  const n1 = num1.length;
  let num2: string = nums2.toString(2);
  const n2 = num2.length;
  if (n1 - n2 > 0) {
    for (let i = 0; i < n1 - n2; i++) {
      num2 = "0" + num2;
    }
  } else {
    for (let i = 0; i < n2 - n1; i++) {
      num1 = "0" + num1;
    }
  }

  let res = 0;
  for (let i = 0; i < num1.length; i++) {
    if (num1[i] !== num2[i]) {
      res++;
    }
  }
  return res == 0 ? res : -1;
}

minChanges(13, 4);
