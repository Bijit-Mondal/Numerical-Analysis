#write a program in perl to calculate the value of integration of 1/(1+x^2) from 0 to 1 using simpson's 3/8 rule
sub f
{
    $x=$_[0];
    $y=1/(1+$x*$x);
    return $y;
}
print "Enter the number of intervals: ";
$n=<STDIN>;
$h=1/$n;
$sum=0;
for($i=1;$i<$n;$i++)
{
    $x=$i*$h;
    if($i%3==0)
    {
        $sum=$sum+2*f($x);
    }
    else
    {
        $sum=$sum+3*f($x);
    }
}
$sum=$sum+f(0)+f(1);
$sum=$sum*3*$h/8;
print "The value of integration is: $sum\n";

