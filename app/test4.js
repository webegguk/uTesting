export default function getPrimes(max) {
  if (max == 1 || max == 2) {
    return []
  }
  let primes = [2]
  if (max == 3) {
    return primes
  }
  for (let i = 3; i <= max; i = i + 2) {
    primes.push(i)
  }
  let j = 1
  while (primes[j] != undefined) {
    primes = primes.slice(0, j + 1).concat(primes.slice(j + 1).filter(function (prime) {
      return !(prime % primes[j] == 0)
    }))
    j++
  }
  return primes.splice(0, max)

}
