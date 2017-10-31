let total = 0;

process.argv.map((num, i) => {
  if (i > 1) {
    let number = Number(num);
    total += number;
  }
});

console.log(total);
