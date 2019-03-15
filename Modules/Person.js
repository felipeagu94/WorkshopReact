export class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    greet = () => `Hi, I'm ${this.name}!`
}