function assignmentreversenumber(N, seen = new Set()) {
  let sum = 0;

  while (N > 0) {
    let rem = N % 10;
    sum += Math.pow(rem, 2);
    N = Math.floor(N / 10);
  }

  if (sum === 1) return 1;

  if (seen.has(sum)) return 0;

  seen.add(sum);

  return assignmentreversenumber(sum, seen);
}

console.log(assignmentreversenumber(19));
console.log(assignmentreversenumber(20));
