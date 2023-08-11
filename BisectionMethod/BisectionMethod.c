//C Program to find the root of x*x*x-2*x-5 using Bisection Method
#include<stdio.h>
#define EPSILON 0.001
double fn(double x){
    return (x*x*x-2*x-5);
}
void bisection(double a,double b){
    if(fn(a)*fn(b)>=0){
        printf("Incorrect a and b");
        return;
    }
    double c=a;
    while((b-a)>=EPSILON){
        c=(a+b)/2;
        if(fn(c)==0.0){
            break;
        }
        else if(fn(c)*fn(a)<0){
            b=c;
        }
        else{
            a=c;
        }
    }
    printf("The value of root is : %lf",c);
}
int main(){
    double a,b;
    a=2;
    b=3;
    bisection(a,b);
    return 0;
}

