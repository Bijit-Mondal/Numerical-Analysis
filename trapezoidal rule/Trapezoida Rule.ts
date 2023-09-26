//Write a program in typescript to calculate integration using trapezoidal rule of function f(x) = x^2 + 1 within the limits 0 to 1.
const fn = (x: number) => x * x + 1;
const a = 0;
const b = 1;
const n = 6;
const h = (b - a) / n;
let sum = 0;
for (let i = 1; i < n; i++) {
    sum += fn(a + i * h);
}
const result = (h / 2) * (fn(a) + fn(b) + 2 * sum);
console.log(result);
