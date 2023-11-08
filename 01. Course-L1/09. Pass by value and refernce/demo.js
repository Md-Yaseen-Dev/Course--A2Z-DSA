// pass by values

function doSomething(num){

    console.log(num);
    num = num +5;
    console.log(num);
    num = num +5;
    console.log(num);

}

var num =10; 
doSomething(num);
console.log(num);// here it is passing values.


// passing by refernce

let arr = [1,2,3]; 

function do_some(arr){

    arr.push(4)
}

do_some(arr);

console.log(arr);

