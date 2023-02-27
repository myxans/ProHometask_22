function numStep(num, step) {
  if (step == 1) {
    return num;
  } else {
    return num * numStep(num, --step);
  }
}

console.log(numStep(5, 2));
console.log(numStep(5, 1));