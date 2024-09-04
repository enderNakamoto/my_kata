export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length - 1;

    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);
        let value = haystack[mid];
        if (value === needle) {
            return true;
        } else if (value < needle) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return false;
}