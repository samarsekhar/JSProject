// Write a program to multiply two number without using multiply sign in javascript ?

function multiply(a,b) {
    let answer = a;
    for (let i=0; i<b-1; i++) {
        answer += a;
    }
    return answer;
}

console.log(multiply(5, 3));

// output:- 15