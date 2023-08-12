//Regula Falsi Method to find the root of x*x*x-2*x-5=0 Program in JavaScript
let E = 0.0001;
const fn = (x) => x * x * x - 2 * x - 5;
const regulaFalsi = (a, b) => {
    let c = a;
    while (Math.abs(fn(c)) >= E) {
        c = (a * fn(b) - b * fn(a)) / (fn(b) - fn(a));
        if (fn(c) == 0) break;
        else if (fn(c) * fn(a) < 0) b = c;
        else a = c;
    }
    console.log(`The value of root is : ${c}`);
}
let a = 2;
let b = 3;
regulaFalsi(a, b);

