// give the class at least 3 properties
// give the class at least 3 methods
// create two instances of the class (two cats)
// log both instances to see their properties
// invoke each method from both instances

class Cat {
    constructor(name, age, gender, color) {
        this.catName = name
        this.catAge = age
        this.catGender = gender
        this.catColor = color
    }

    move() {
        console.log("I am moving meow")
    }

    sleep() {
        console.log("I am sleeping meow")
    }

    play(friendCat) {
        console.log(`I am playing with ${friendCat.catName} meow`)
    }

    eat() {
        console.log("I am eating meow")
    }
}


const catOne = new Cat("Felix", 5, "male", "black")
const catTwo = new Cat("Lea", 3, "female", "white")

console.log(catOne)
console.log(catTwo)

catOne.move()
catOne.sleep()
catOne.play(catTwo)
catOne.eat()

// create 3 properties that are set by the constructor
// create 3 methods
// instantiate 2 arrays of 3 pirates, name the arrays after your favorite pirate ships, jollyRoger and blackPearl
// loop over each array and print 3 properties of each pirate


class Pirate {

    constructor(name, age, gender, skills){
        this.name = name
        this.age = age
        this.gender = gender
        this.skills = skills
    }
  
    greetings() {
        console.log(`Hello Pirate ${this.name} `)
    }
  }

  const jollyRoger = []
  const blackPearl = []

jollyRoger[0] = new Pirate("Andrew", 50, "male", "magneticControl")
jollyRoger[1] = new Pirate("John",   35, "male", "timeTravel")
jollyRoger[2] = new Pirate("Curtz", 20, "male", "telekensis")

blackPearl[0] = new Pirate("Mina",  25, "female", "invisibility")
blackPearl[1] = new Pirate("Jack",  35, "male" , "divinePowers")
blackPearl[2] = new Pirate("Yan",   19, "male" , "healing")

const Ships = [jollyRoger, blackPearl]

Ships.forEach(function(pirates) {
    for(let i = 0; i < pirates.length; i++) {
        console.log(pirates[i])
    }
})



