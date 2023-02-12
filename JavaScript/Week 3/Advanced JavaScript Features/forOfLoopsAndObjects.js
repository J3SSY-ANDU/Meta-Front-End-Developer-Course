// for of loops and objects
let colors = ["red", "green", "blue"];
for (var color of colors) {
    console.log(color);
}

// Built-in objects: Object.keys(), Object.values(), and Object.entries()

// So, when I run Object.keys() and pass it my car2 object, the returned value is an array of strings, where each string is a property key of the properties contained in my car2 object.
// Example: 
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']


// Another useful method is Object.values():
// Example:
const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']



// The Object.entries() method

// Finally, there's another useful method, Object.entries(), which returns an array listing both the keys and the values.  
const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4)); // [ ['speed', 400], ['color', 'magenta'] ]



// Examples
// You now have all the ingredients that you need to loop over any object's own property keys and values.
// Here's a very simple example of doing just that:
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}



