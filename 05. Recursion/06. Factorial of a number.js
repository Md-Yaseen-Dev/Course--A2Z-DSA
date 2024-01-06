//  ---------------------factorial of a number -----------------

// ex:- 4! = 4*3*2*1 = 24


function fact(n){

    if(n == 1){
        return 1;
    }
    return n  * fact(n-1);
}
console.log(fact(5));

// Time complexity: O(N)
// space complexity : O(N);