class Person {
    constructor(name, age, height) {
        this.name = name,
            this.age = age,
            this.height = height
    }
    run() {
        console.log(`${this.name} is running`)
    }

    date = new Date()
}



class People extends Person {
    constructor(name, age, height,speed) {
        super()
        this.name = name,
            this.age = age,
            this.height = height
        this.speed = speed
    }
    run(){
        super.run()
        console.log('extend is running');
    }

}

let person = new Person("RAY", 10, 122)
let people = new People("RAY", 10, 122,5555)
console.log(people)
people.run()


class Human {
    constructor(name, country, skill,sex) {
        this.name = name,
            this.country = country,
            this.skill = skill,
            this.sex = sex
    }
    run() {
        console.log(`${this.name} is running`)
    }

}


class Superhuman {
    constructor(name, country, skill,sex) {
        this.name = name,
            this.country = country,
            this.skill = skill,
            this.sex = sex
    }
    fly(location){
console.log(`${location}`)
    }
    createPower(power){
        console.log(`${power} `)
    }
}

class Xmen extends Superhuman {
    constructor(name, country, skill,sex) {
        super()
        this.name = name,
            this.country = country,
            this.skill = skill,
            this.sex = sex
    }
    specialSkill(){
        console.log('specialSkill');
    }
}

class NormalHuman extends Superhuman {
    constructor(name, country, skill,sex) {
        super()
        this.name = name,
            this.country = country,
            this.skill = skill,
            this.sex = sex
    }
    fly(location,speed){
        super.fly()
        console.log(`Flying to ${location} with ${speed}`)
    }
    static walk(){
        console.log(`Human is walking`)
    }
}



let p1 = new Superhuman("RAY", "Thailand", "Cooking","F")

let p2 = new Xmen("WAY", "Thailand", "Exploring","F")

let p3 = new NormalHuman("SUNNY", "Thailand", "Coding","M")

console.log(p3)
p3.fly("MOON",2000000)
p1.fly("LA")
p2.specialSkill()
p2.fly("QWEQWE")
NormalHuman.walk()

/*let arr = ["a","b","c"]
let a = null
const [,b,c] = ["a","b","c"]

console.log(arr[0])
console.log(a)*/

/*let obj = {a:"a",b:"b",c:"c"}
const {a:C,b:A,c:B} = obj
console.log(obj.b)
console.log(B)

let arrr = ["a","b","c","d","e"]
const [a,b,c,d,e] = ["a","b","c","d","e"]  
let _str = arrr[3]
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(_str)

let obj = {a:"a",b:"b",c:"c"}
const {a:apple,b:bell,c:cat} = obj
console.log(apple)*/

let arr = [1,2,3,4,5];
[arr[1],arr[0]] = [arr[0],arr[1]]
console.log(arr)