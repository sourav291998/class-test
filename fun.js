

var subs = { "JAVA" :" WELCOME TO JAVA CLASS","PHP": "WELCOME TO PHP CLASS"}   

const student = {reg:"11504580",state:"WB"}

const add= function(arr)
{
    let total=0;
    i=0;

    while(i<arr.length)
    {
        total +=arr[i];
        i++;
    }
    return total;
}
const mull = function(arr)
{
    let mul=1;
    i=0;

    while(i<arr.length)
    {
        mul *=arr[i];
        i++;
    }
    return mul;
}

const agv = function(a)
{
    let s ="";
    s=a;
    return s;
}



module.exports = [subs,student,add,mull,agv];