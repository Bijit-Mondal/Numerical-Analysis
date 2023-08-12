//C Program to find the root of x*x*x-2*x-5=0 using Regula Falsi Method
#include<stdio.h>
#include<math.h>
#define EPSILON 0.00001
double f(double x){
    return x*x*x-2*x-5;
}
void regulaFalsi(double a,double b){
    if(f(a)*f(b)>=0){
        printf("You have not assumed right a and b\n");
        return;
    }
    double c=a;
    while(fabs(f(c))>=EPSILON){
        c=(a*f(b)-b*f(a))/(f(b)-f(a));
        if(f(c)==0.0)
            break;
        else if(f(c)*f(a)<0)
            b=c;
        else
            a=c;
    }
    printf("The value of root is : %lf\n",c);
}
int main(){
    double a=2,b=3;
    regulaFalsi(a,b);
    return 0;
}
