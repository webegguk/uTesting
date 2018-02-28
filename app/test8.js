
export default function test8() {
  let total = 0;
  const getSum = function(x, y) {
    while (y != 0) {
      const carry = x & y;
      x = x ^ y;
      y = carry << 1;
    }
    return x;
  }
  for (let i = 1; i <= 100; i++) {
    total = getSum(total, i);
  }
  return total;
}
