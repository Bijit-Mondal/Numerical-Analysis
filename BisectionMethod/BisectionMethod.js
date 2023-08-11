//Bisection Method to find the root of x*x*x-2*x-5=0 Program in JavaScript
let EPSILON = 0.001;
const fn = (x) => x * x * x - 2 * x - 5;
const bisection = (a, b) => {
    if(fn(a)*fn(b)>=0){
        console.log("You have not assumed right a and b");
        return;
    }
    let c=a;
    while(b-a>=EPSILON){
        c = (a + b) / 2;
        if (fn(c) == 0.0) break;
        else if (fn(c) * fn(a) < 0) b = c;
        else a = c;
    }
    console.log(`The value of root is : ${c}`);
};
let a = 1;
let b = 3;
bisection(a, b);
