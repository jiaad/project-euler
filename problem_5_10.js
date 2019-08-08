function probleme10() {
  for (let i = 2; i < 10; i++) {

    if (i % 1 == 0 && !(i % 2 == 0))
      console.log(i);

  }
}
// probleme10()

function isPrime(num) {
  for (var i = 2; i < num; i++)
    if (num % i === 0) {
      console.log(i)
    }
}
isPrime(10)