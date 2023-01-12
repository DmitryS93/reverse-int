module.exports = function reverse (n) {
    const nAbs = Math.abs(n)
    const nString = String(nAbs);
    let result = ""
    for (let i = 0; i < nString.length; i += 1) {
        result = nString[i] + result;
    }
    return result
}
