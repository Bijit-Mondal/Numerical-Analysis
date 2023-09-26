//Write a program in typescript to find the integration of 1/(1+x^2) within the limit 0 to 1 using Simpson's 3/8 rule.
const fn = (x: number) => 1 / (1 + x * x);
const simpson38 = (a: number, b: number, n: number) => {
    let h = (b - a) / n;
    let sum = fn(a) + fn(b);
    for (let i = 1; i < n; i++) {
        if (i % 3 == 0) sum += 2 * fn(a + i * h);
        else sum += 3 * fn(a + i * h);
    }
    return (3 * h * sum) / 8;
};
console.log(simpson38(0, 1, 6));
