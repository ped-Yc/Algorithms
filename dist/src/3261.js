/**
 * - 题目：3261. 统计满足 K 约束的子字符串数量 II
 * - 题目地址：https://leetcode.cn/problems/count-substrings-that-satisfy-k-constraint-ii/description/?envType=daily-question&envId=2024-11-13
 * - 状态: YCDONE
 */

/**
 * @param {string} s
 * @param {number} k
 * @param {number [][]} queries
 * @return {number []}
 */

/**
 * 思路：滑动窗口，前缀和，二分查找
 * 1. 获取以 i 为右端点的子字符串个数：以 [left=0,right=i] 为左右端点构建窗口，当 i 增大时窗口内字符数量变多，当不满足 k 约束时左端点右移直到满足约束，记为 left [i]。那么以 i 为右端点的子字符串个数为：R(i)-L(left [i])+1，累加到结果中
 * 2. 获取以 [left=li,right=ri] 为左右端点的子字符串个数：对于每一个右端点 i 有一个最小左端点 left [i]，左端点以左的数全部不符合 k 约束
 * 若 li>=left [i], 即区间中的所有子串全都符合条件，ans (li,ri)= ans (left [i],i)=(left [i]+i)*(i-left [i]+1)/2; 
 * 若 li<left [i], 即区间中的部分元素符合条件，符合条件的部分记为 ans (li,ql)=(li+ql)*(ql-li+1)/2；不符合条件的部分记为 ans (ql+1,ri)= R(ql+1)-L(left [ql+1])+1 + ... + R(ri)-L(left [ri])+1 
 * 查找 ql 可以使用二分查找或者预处理；二分查找left[i]中的第一个大于等于li的数，即 ql = left[i].findIndex(el=>el>=li)。预处理：构建一个right[j]数组，表示以 j 为左端点的符合约束的最大右端点，那么 ql = min(right[j],ri+1)
 * 可以使用前缀和求解 ans (ql+1,ri)
**/
var countKConstraintSubstrings = function (s, k, queries) {
    let l = 0;// 记录窗口左端点
    const left = new Array(s.length).fill(0);// 记录以 i 为右端点的符合约束的最小左端点left[i]
    const right = new Array(s.length).fill(s.length);// 记录以 i 为右端点的符合约束的最大右端点right[i]
    const cnt = [0, 0];// 记录窗口中 0 和 1 出现的次数
    // 记录以 i 为右端点的子字符串个数
    const pre = new Array(s.length + 1); // 前缀和数组，用于计算 R-L+1
    pre[0] = 0;
    const answer = new Array(queries.length).fill(0);

    // 1.以 i 为右端点构建窗口，获取left[i]数组
    for (let i = 0; i < s.length; i++) {
        cnt[parseInt(s[i], 10)]++;// 记录窗口中 0 和 1 出现的次数
        // 内层循环控制右端点
        while (cnt[0] > k && cnt[1] > k) {
            cnt[parseInt(s[l], 10)]--;// 记录窗口中 0 和 1 出现的次数
            l++;
        }
        left[i] = l;
        pre[i + 1] = pre[i] + (i - l + 1);
    }
    // 2.预处理，构建right[i]数组
    l = 0;
    for (let i = 0; i < s.length; i++) {
        while (l < s.length && left[l] < i) {
            l++;
        }
        right[i] = l;
    }
    // 3.获取答案
    queries.forEach((el, i, arr) => {
        let [li, ri] = el;
        // 在预处理数组right[i]中查找ql
        let ql = Math.min(right[li], ri + 1);
        answer[i] = pre[ri + 1] - pre[ql] + (ql - li + 1) * (ql - li) / 2;
    });
    return answer;
}
// 二分查找ql，ql为left[i]中第一个大于等于li的数
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
}



test = function () {
    s = "010101", k = 1, queries = [[0, 5], [1, 4], [2, 3]]
    console.log(countKConstraintSubstrings(s, k, queries));
}
test();