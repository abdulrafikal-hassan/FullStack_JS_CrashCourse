let myFavoriteNumber = 376
console.log(myFavoriteNumber)

// functions in JS 
// functions are action words(verb)
alert('This is my first inbuilt function')

// creating a custom function 
function greet(name, favColor) {
    alert("Hello, my name is "+ name + "and my favorite color is " + favColor + ".")
}

greet('Brad', "Blue")

// a functionn that will triple the number sent to it 
function tripleMe(x) {
    return 3 * x
}

 let myFavoriteNumber = tripleMe(12)
 alert(myFavoriteNumber)