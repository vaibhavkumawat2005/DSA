function findMedianSortedArrays(nums1, nums2) {
    if (nums1.length > nums2.length) {
        let temp = nums1;
        nums1 = nums2;
        nums2 = temp;
    }

    let m = nums1.length;
    let n = nums2.length;
    let left = 0;
    let right = m;

    while (left <= right) {
        let partition1 = left + ((right - left) >> 1);
        let partition2 = ((m + n + 1) >> 1) - partition1;

        let maxLeft1 = partition1 === 0 ? -2147483648 : nums1[partition1 - 1];
        let minRight1 = partition1 === m ? 2147483647 : nums1[partition1];
        let maxLeft2 = partition2 === 0 ? -2147483648 : nums2[partition2 - 1];
        let minRight2 = partition2 === n ? 2147483647 : nums2[partition2];

        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            if (((m + n) & 1) === 1) {
                return maxLeft1 > maxLeft2 ? maxLeft1 : maxLeft2;
            } else {
                let leftMax = maxLeft1 > maxLeft2 ? maxLeft1 : maxLeft2;
                let rightMin = minRight1 < minRight2 ? minRight1 : minRight2;
                return (leftMax + rightMin) / 2;
            }
        } else if (maxLeft1 > minRight2) {
            right = partition1 - 1;
        } else {
            left = partition1 + 1;
        }
    }
    throw new Error("The arrays are not sorted.");
}

const nums1 = [1, 3];
const nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2));
