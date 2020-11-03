// let catName = "Fluffy"
// let catAge = 4
// this is a bad implementation of objects 

// function meow() {
//     alert("Meoooowwww")
// }

let cat = {
    name: "Fluffy",
    age: 4,
    eyeColor: "blue",
    foods: {
        favorite: "Tuna",
        least_fav: "Oranges"
    },
    // a function in anobject is a method 
    meow() {
        alert("Meoowwwww")
    }
}

cat.meow()


document.addEventListener("click", myAmazingFunction)

function myAmazingFunction() {
    alert("Hello there! ")
}
