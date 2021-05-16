/**
 * #1 Create an object literal named `monkey`
 * #2 Give it 3 unique properties
 * #3 Give it at least 2 behaviours/methods of your choice
 * #4 Calls the object's method(s) and output a result of your choice to the console.
 * #5 Convert the object literal to an Class
 * #6 Then call its method and output to the console.
 */

// #1 Create an object literal named `monkey`
const monkey = {
    // #2 Give it 3 unique properties
    eye : 2,
    hand : 2,
    tail : true,
    // #3 Give it at least 2 behaviours/methods of your choice
    howl: function () {
        console.log("Monkey is howling!");
    }, 
    isRunning: function () {
        console.log("Monkey is running!");
    },
    // #4 Calls the object's method(s) and output a result of your choice to the console.
    getEyes: function () {
        return this.eye;
    },
    getHands: function () {
        return this.hand;
    },
    getTail: function () {
        return this.tail;
    }
}

//  #5 Convert the object literal to an Class
class Monkey {
    eye;
    hand;
    tail;
    constructor(eye, hand, tail){
        this.eye = eye;
        this.hand  = hand;
        this.tail = tail;
    }

    howl() {console.log("Monkey is howling!");}
    isRunning() {console.log("Monkey is running!");}
    getEyes() {return this.eye;}
    getHands() {return this.hand;}
    getTail() {return this.tail;}
}


// #6 Then call its method and output to the console.
const david = new Monkey(2,2,false);
const eyes = david.getEyes();
const hands = david.getHands();
const hasTail = david.getTail();

console.log("David has " + eyes + " eyes.");
console.log("David has " + hands + " hands.");
if(hasTail){
    console.log("David has a tail.");
} else {
    console.log("David doesn't have a tail.");
}
david.howl();
david.isRunning();