function primeNumber(Pnumber) {
  let count = 0;

  for (let i = 2; i < Pnumber; i++) {
    if (Pnumber % i === 0 && i !== Pnumber) {
      count++;
    }
  }

  let check =
    count === 0 ? Pnumber + ": Prime Number" : Pnumber + ": Not a Prime Number";

  console.log(check);
}

primeNumber(3);

primeNumber(10);
