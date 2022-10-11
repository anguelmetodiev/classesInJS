/*
There is only one Governor in the state, 
add static methods and properties you'd expect a Governor to have.
log the properties and test the methods (don't instantiate)
*/

class Governor {
    static name = "James Gatsby"
    static age = 55
    static status = "governor"
    static gender = "male"
    static party  = "independent"
    static state = "New York"

    static IncreaseYourTaxes() { return "You must pay higher taxes now!"; }
    static WantsYourVote()            { return "Vote for me!"; }
    static PoliticalMessage() {return `My name is ${this.name}. I'm ${this.gender}, ${this.age} years old, from ${this.state}. I represent the ${this.party} party and I am your ${this.status}.`}    
}


console.log(Governor.name);
console.log(Governor.age);
console.log(Governor.status);

console.log(Governor.IncreaseYourTaxes());
console.log(Governor.WantsYourVote());
console.log(Governor.PoliticalMessage());


/*
Think of three properties all people share, set them with the constructor
Think of three methods all people share
Create a PostalWorker class that inherits from person, add some methods
Create a Chef class that inherits from person, add some methods
Create 2 PostalWorkers and 2 Chefs, log them and test all their methods
*/

//base class Person

class Person {
    constructor (name, age, career) {
        this.name = name,
        this.age = age,
        this.career = career
    }

    eat () {
        console.log(`${this.name} is eating.`)
    }

    old () {
        console.log(`${this.name} is ${this.age} old.`)
    }

    work () {
        console.log(`${this.name} is working as a ${this.career}.`)
    }
}

class PostalWorker extends Person {
    deliveringMail () {
        console.log(`${this.name} is delivering mail for you.`)
    }

    retire () { if (this.age >= 62) {
        console.log(`${this.name} is turning ${this.age} and can retire.`)
    } else {
        console.log(`${this.name} is turning ${this.age} and will continue working for ${(62 - this.age)} years.`)
    }
}
}

class Chef extends Person {
    cooking () {
        console.log(`${this.name} is a professional ${this.career}.`)
    }

    party (food) {
        console.log(`${this.name} is turning ${this.age} next month and we will have a party. The ${this.career} will make ${food} for us.`)
    }

}

console.log(Person)
console.log(PostalWorker)
console.log(Chef)

const jennyLee = new PostalWorker ("Jenny Lee", "22", "PostalWorker - Queens")
console.log(jennyLee)
jennyLee.deliveringMail()
jennyLee.retire()

const jamesGold = new PostalWorker ("James Gold", "62", "PostalWorker - Long Island")
console.log(jamesGold)
jamesGold.deliveringMail()
jamesGold.retire()

const jerryHan = new Chef ("Jerry Han", "33", "Main Chef")
console.log(jerryHan)
jerryHan.cooking()
jerryHan.party("sushi")

const mikeMendel = new Chef ("Mike Mendel", "66", "Master Chef")
console.log(mikeMendel)
mikeMendel.cooking()
mikeMendel.party("pizza")
