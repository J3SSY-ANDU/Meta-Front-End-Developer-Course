// The forEach() method
//Arrays in JavaScript come with a handy method that allows you to loop over each of their members. 
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);