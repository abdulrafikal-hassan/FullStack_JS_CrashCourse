// it accepts or returns a function 

// 1. it accepts a function as an argument
document.addEventListener("click", ourAmazingFunction)

function ourAmazingFunction() {
    alert("Thank you for clicking.")
}

// 2. it returns a function as a result 
function doubleMe(x) {
    return x * 2
}

document.write(doubleMe(20))

 function createMultiplier(multiplier) {
     return functiton(x) {
         return x * multiplier
     }
 }

let doubleMe = createMultiplier(2)
document.write(doubleMe(10))


let myColors = ['red', 'orange', 'yellow']

myColors.forEach(saySomethingNice)

function saySomethingNice(color) {
    document.write("The color " + color + " is a great color. <br>")
}

