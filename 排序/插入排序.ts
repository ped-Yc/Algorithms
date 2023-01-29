// 插入排序
function INSERT_SORT(A: []) {
  for (let j = 2; j < A.length; j++) {
    let key = A[j],
      i = j - 1;
    while (i > 0 && A[i] > key) {
      A[i + 1] = A[i];
      i--;
    }
    A[i + 1] = key;
  }
}
