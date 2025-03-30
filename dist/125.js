function isPalindrome(s) {
    let i = 0, j = s.length - 1;
    while (true) {
        while (i < j && !testAlphabet(s[i])) {
            i++;
        }
        while (i < j && !testAlphabet(s[j])) {
            j--;
        }
        if (i > j)
            break;
        if (!testEqual(s[i], s[j])) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}
;
function testAlphabet(character) {
    return /^[a-zA-Z0-9]+$/.test(character);
}
function testEqual(c1, c2) {
    return c1.toLowerCase() === c2.toLowerCase();
}
//# sourceMappingURL=125.js.map