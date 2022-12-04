//example_1
let person = {
    name: "peter",
    sayHi() {
        console.log(`helloo ${this.name}`);
    }
}

function getNameFromPerson() {
    //let result = person.sayHi.bind(person)
    let result = person.sayHi
    console.log(result);
    return result
}
//correct case
let res = getNameFromPerson();
res();

//example_2
let user = {
    firstName: "Alex",
    lastName: "Azizov"
}

function helloAlex(hello) {
    return `hello ${this.firstName}`
}

//incorrect case
let resultHelloAlexIncorret = helloAlex
console.log(resultHelloAlexIncorret('hello'));

//corrct case
let resultHelloAlex = helloAlex.bind(user)
console.log(resultHelloAlex('hello'));



//case use bind all

let colour = {
    firstValue: "#91161c75",
    secondValue: "#00000075",
    thirdValue: "#201b1b75",
    forthValue: "#4545b075",

    returnColour(){
        return this.forthValue + " " + this .firstValue + " "+ this.secondValue + " " + this.thirdValue;
    }

}



function logOptionsFromColour(colour){
    let result 
    for(let key in colour){
            //got function with our object the colour
           if(typeof colour[key] == 'function'){
            result = colour[key]() //work it?
            //result = colour[key].bind(colour)()
           }
       
    }
    console.log(result);
    return result
}

console.log(logOptionsFromColour(colour))




function setOptionsInList(colour) {
    let listColour = []
    for (let [key, val] of Object.entries(colour)) { 
        listColour.push(val)
    }
    return listColour
}
let result = setOptionsInList(colour)
//console.log(result);




