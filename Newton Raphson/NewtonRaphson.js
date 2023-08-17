//write newton raphson method in javascript to find the root of x^3-5x-1=0
let EPSILON = 0.0001;
const fn = (x) => x * x * x - 5 * x - 1;
const dfn = (x) => 3 * x * x - 5;
const newtonRaphson = (x) => {
  let h = fn(x) / dfn(x);
  while (Math.abs(h) >= EPSILON) {
    h = fn(x) / dfn(x);
    x = x - h;
  }
  return x;
};
console.log(newtonRaphson(0));
