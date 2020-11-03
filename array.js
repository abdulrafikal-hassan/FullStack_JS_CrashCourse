let myFavoriteNumbeer = 7
let myFavoriteNumbers = [9,2,4,2,8,5,3]
let myWords = ["red", "orange", "yellow"]
let myPets = [
    {name: "Meoowwwalot", species: "cat"},
    {name: "Barksalot", species:"dog"}
]

// Adding an element to the end of the array 
myWords.push("green")
console.log(myWords)

// removing a particular item from an array .splice(index, val.of items)
myWords.splice(1,1)
console.log(myWords)
