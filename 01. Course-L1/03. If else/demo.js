function ages(age){
if(age >= 18){

console.log("you are adult")
}
else{
    console.log("you are not adult");
}
}

ages(19);
ages(5);

//  A school has following rules for grading system
// a. below 25- f;
// b. 25 to 44 - E;
// c. 45 to 49 - D;
// d. 58 to 59 - C;
// e. 60 to 79 - B;
// f. 80 to 100 - A;

function rank (marks){

 if(marks < 25){
    console.log("F")
 }

 else if(marks >=25 && marks <= 44 ){
    console.log("E")
 }
 
 else if(marks >= 45 && marks<= 49 ){
    console.log("D")
 }
 
 else if(marks >= 50 && marks<= 59){
    console.log("C")
 }
 
 else if(marks >= 60 && marks <= 79 ){
    console.log("B")
 }
 
 else if(marks >= 80 && marks<=100 ){
    console.log("A")
 }

 else{

    console.log("check the marks correctly")
 }


}

rank(45);
rank(75);
rank(15);
rank(89);


