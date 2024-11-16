// 枚举数组的所有子数组
// 外层循环控制起始位置，内层循环控制结束位置
function getAllSubarrays(arr) {
    let subarrays = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            subarrays.push(arr.slice(i, j + 1))
        }
    }
    return subarrays;
}

// 记忆化优化
// 将已枚举的数组存储起来，避免重复计算
function getAllSubarraysMemoization(arr) {
    let subarrays = []
    let memo = new Map()

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let key = `${i}-${j}`;
            if (!memo.has(key)) {
                memo.set(key, arr.slice(i, j + 1))
            }
            subarrays.push(memo.get(key))
        }
    }
    return subarrays;
}

// Generator函数优化
// 使用Generator函数生成子数组，避免一次性生成所有子数组
function* getAllSubarraysGenerator(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            yield arr.slice(i, j + 1)
        }
    }
}
// 调用
const arr = [1, 2, 3]
for (let subarray of getAllSubarraysGenerator(arr)) {
    console.log(subarray)
}