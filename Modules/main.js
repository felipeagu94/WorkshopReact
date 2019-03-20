//import { task, teams, winner } from './helpers.js'
import helpers,{ task, teams, winner } from './helpers.js'
import {Person} from './Person.js'
console.log(task)
console.log(teams)
console.log(winner(teams[1]))
console.log(helpers[0])
const Felipe = new Person('Felipe',24)
console.log(Felipe.greet())

(function ConstExplain(){
    const c_age = 30
    console.log(c_age)
    if(true){
        const c_age = 25
        console.log(c_age)
    }
    console.log(c_age)
})();

(function ConstExplain(){
    const person = {nombre: 'Felipe', edad: 24}
    console.log(c_age)
    if(true){
        person.edad = 25
        console.log(person)
    }
    console.log(person)
})();