// -----------------palindrome using recursion --------------------

let str = "madam"

let str1 = "teacher"
function plaindrome(str,start,end){

if(start>end){return true}
    if(str[start] != str[end]){
        return false;
    }

return plaindrome(str,start+1,end-1)


}

console.log(plaindrome(str,0,str.length-1));
console.log(plaindrome(str1,0,str1.length-1));

