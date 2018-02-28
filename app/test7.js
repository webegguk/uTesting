export default function test7(string) {
  //Write your solution here
  String.prototype.reverse = function () {
    return Array.from(this).reverse().join('')
  }
  //
  return string.reverse();
}

