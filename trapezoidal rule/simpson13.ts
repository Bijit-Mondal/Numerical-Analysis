//write a program in typescript to calculate the value of integration of 1/(1+x^2) from 0 to 1 using simpson 1/3 rule
const fn = (x: number) => 1 / (1 + x * x);
const simpson13 = (a: number, b: number, n: number) => {
    const h = (b - a) / n;
    let sum = fn(a) + fn(b);
    for (let i = 1; i < n; i++) {
        sum += 2 * fn(a + i * h);
    }
    sum *= h / 2;
    return sum;
};
console.log(simpson13(0, 1, 6));
