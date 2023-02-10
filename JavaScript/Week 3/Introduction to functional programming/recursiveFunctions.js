// Recursive functions
// If I run the code the way it is, is going to run endlessly

// function example() {
//     console.log("line one");
//     console.log("line two");
//     console.log("line three");
//     example()
// }

let counter = 3;
function example() {
    console.log(counter);
    counter = counter - 1;
    if (counter === 0) return;
    example()
}

example()