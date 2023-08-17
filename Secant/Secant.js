//write a program to write a program to find root using secant method of function x^2-4x-10=0
let E=0.0001;
const fn = (x) => x*x-4*x-10;

const secantMethod = (x0,x1) => {
    let x2;
    let f0 = fn(x0);
    let f1 = fn(x1);
    let f2;
    while(Math.abs(x1-x0)>E){
        x2 = x1 - (f1*(x1-x0))/(f1-f0);
        f2 = fn(x2);
        x0 = x1;
        x1 = x2;
        f0 = f1;
        f1 = f2;
    }
    console.log(`Root is ${x2}`);
}

secantMethod(1,2);
