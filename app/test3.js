export default function test3(numMax) {
    let result = [0, 1]
    for (let i = 0; i < numMax - 2; i++) {
        result.push(result[i] + result[i + 1]);
    }
    return result.splice(0, numMax)
}
