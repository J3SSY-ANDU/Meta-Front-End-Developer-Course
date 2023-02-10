// Differences between for in and for of
const car = {
    engine: true
}
const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sportsCar Object:", sportsCar);

// iterate for prototypes and object
for (prop in sportsCar) {
    console.log("For in:", prop);
}

// iterates for object only
for (prop of Object.keys(sportsCar)) {
    console.log("For of:", prop, ":", sportsCar[prop]);
}

