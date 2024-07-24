export function total(fst, ...arr) {
  return arr.reduce((total, ele) => (total += ele), fst);
}

export function findNum(num, arr) {
  return arr.find((ele) => ele == num);
}

export function filterNum(num, arr) {
  return arr.filter((ele) => ele > num);
}
