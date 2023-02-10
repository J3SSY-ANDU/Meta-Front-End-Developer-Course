try {
    console.log(a + b);
    console.log("This line is never reach.");
}
catch(err) {
    console.log(err)
    console.log("There was an error")
}
console.log("My program does not stop")


try {
    throw new TypeError();
}
catch(err) {
    console.log(err);
    console.log("There was a Reference Error")
}
console.log("My program does not stop")



