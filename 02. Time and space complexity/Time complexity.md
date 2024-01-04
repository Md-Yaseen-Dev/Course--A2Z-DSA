> # TIME COMPLEXITY

### What is Time complexity

we can solve a problem using different logic and different codes. Time complexity bascially helps to judge different codes. Time complexity also helps to decide which code is better . In an interview generally judges a code by its time complexity.

Now, the term time complexity seems that it is reffering to the time taken by a machine to execute a particular code. But in real life. <b>Time complexity does not refer to the time taken by the machine to execute particular code. </b>

**Let's understand why we should not judge any code on the basis of the time taken by a machine.**

If we run the same code in a low-end machine(e.g old windows machine) and in a high-end machine (e.g Latest Macbook) we will observe that two different machines take different amounts of time for the same code. The high end machine will take lesser time as compared to the low-end machine.

So, the time taken by a machine can be changed depending on the configruation.

**That is why we should not compare the two different codes on the basis of the time taken by a machine as the time is dependent on it**

#### Definition

The rate at which the time, required to run a code, changes with respect to the input size, is considered the time complexity. **Basically, the time complexity of a particular code depends on the given input size, not on the machine used to run the code.**

**How we will represent the time complexity of any code**

To represent the time complexity. we generally use the Big O notation. The Big O notation looks like the following.

O()

Time taken by a code

```javascript
for (let i = 1; i <= 5; i++) {
  console.log("hurrah!");
}
```

The time complexity for this code is nothing but the number of steps, this code will take to be executed. So if we write this in terms of big O notation, it will be like O(no of steps)

Let's observe the steps for this code.

1. First , the assigning step(i=1) will be done.
2. The second step will be comparison i.e i <=5.
3. The third step will be the print statement(i.e console.log("hurray"));
4. The fourth step will be the increment(i.e i++).
5. In the fifth step, the updated value of i will be agian checked i.e the comparison(i<=5).
6. In the sixth step, the print statement will be executed and so on.

This flow will continue until the value of i becomes greater than 5(i.e. 6). In a broader sense, we can observe that the ‘for loop’ will run 5 times and for each time three steps will be surely executed i.e. checking/comparison, printing, and increment. So, the total steps will be 5\*3 = 15. And the time complexity in terms of Big O notation will be O(15).

Now, if we write N instead of 5, the number of steps will be then N*3 = 3N and the time complexity will be O(3*N).

But this manual counting process is not feasible for any code. As the ‘for loop’ might run a billion or million times and inside that ‘for loop’, there might be a large no. of operations or some other ‘for loops’ as well. So, we have to find out a better approach to calculate the time complexity of any given code.

Here come the three rules, that we are going to follow while calculating the time complexity:

1. We will always **calculate the time complexity for the worst-case scenario.**
2. We will **avoid including the constant terms.**
3. We will also **avoid the lower values.**

Let's discuss the rules indivdually:

1. **Calculate the time complexity for the worst-case scenario:**

Before discussing the point we need to understand the three terms i.e. Best Case, Worst Case, and Average Case.

Let’s understand these three terms considering the following piece of code:

```javascript
if (marks < 25) console.log("grade D");
else if (marks < 45) {
  console.log("grade c");
}
else if (marks < 45) {
  console.log("grade c");
}
else if (marks < 45) {
  console.log("grade c");
}

```

 I.  **Best Case :** This term refers to the case where the code takes the least amount of time to get executed. For example, if the mark is 10(i.e. < 25), only the first line will be executed and the rest of the lines will be skipped. So, the least amount of steps i.e. only 2 steps are required in this case. This is an example of the best case.

II. **Worst Case:** This term refers to the case where the code takes the maximum amount of time to get executed. For example, if the mark is 70(i.e. > 65), the last line will be executed after checking all the above conditions. So, the maximum amount of steps i.e. 4 steps are required in this case. This is an example of the worst case.

III. **Average Case:** This term is pretty self-explanatory. This is basically the case between the best and the worst.


Now, as we always want that our system serves the maximum number of clients, we need to calculate the time complexity for the worst-case scenario. With this, we can actually judge the robustness of any code or any system.

2. **Avoid including the constant terms:**


Let’s understand this rule considering the time complexity: O(4N3 + 3N2 + 8). Now, if we consider the value of N as 105 the time complexity will be like this:  O(4*1015 + 3*1010 + 8). In this case, the constant term 8 is very less significant in terms of changing the time complexity with different values of N. That is why we should avoid the constant terms while calculating the time complexity.

If we want to think of this case in terms of code, we can consider the following code:

```javascript
let x =2 ;

for(let i =1 ; i<= N ; i++){

console.log("yep")

}

```

Here, the first step (i.e. int x = 2) will be executed in unit time i.e. constant time. The precise time complexity is O(3N + 1) but in this case, the constant 1 is very less significant. So we will write the time complexity as O(3N) avoiding the constant term.

3. **Avoid the lower values:**

Now, in the previous example, the given time complexity is O(4N3 + 3N2 + 8) and we have reduced it to O(4N3 + 3N2). Here, we can clearly observe if the value of N is a large number, the second term i.e. 3N2 will also be a less significant term. For example, if the value of N is 105 then the term 3*1010 becomes less significant with respect to 4*1015. So, we can also avoid the lower values and the final time complexity will be O(4N3 )

**Note**: A point to remember is that we can actually ignore the constant coefficients as well. For example, considering the time complexity O(4N3 ) as O(N3 ) is also correct.

Apart from the widely used Big O notation, there are several other notations. Among them, the two most common are the Theta notation(θ) and the Omega notation(Ω). The differences are shown in the below table:
| **Big O notation**|**Theta notation**   | **Omega notation**      |
|-----------|----| ---|
|Represents the worst-case time complexity i.e the upper bound | Represent the average-case time complexity | Represents the best case time complexity i.e the lower bound.


These concepts are not much important from the interview perspective and so here we are not going to discuss these in detail. Please follow any standard textbook if you want the details and the mathematical derivations.

---

> # SPACE COMPLEXITY


#### What is space complexity ?

The term space complexity generally refers to the memory space that a code uses while being executed. Again space complexity is also dependent on the machine and so we are going to represent the space complexity using the Big O notation instead of using the standard units of memory like MB, GB, etc.


###### Definition:
Space complexity generally represents the summation of auxiliary space and the input space. Auxiliary space refers to the space that we use additionally to solve a problem. And input space refers to the space that we use to store the inputs.


```
Input(a) // 1 Input space
Input(b) // 1 Input space
c= a+b
// c-> 1 auxillary space

```
The variables a and b are used to store the inputs but c refers to the space we are using to solve the problem and c is the auxiliary space. Here the space complexity will be O(3).

Similarly, if we use an array of size n, the space complexity will be O(N).