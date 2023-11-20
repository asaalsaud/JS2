//date
const d= new Date(2023, 10, 13);
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getMonth());
console.log(d.getFullYear());

const number = Math.ceil(9.12);
console.log(number);

const number2 = Math.floor(9.12);
console.log(number2);

const number3 = Math.round(9.52);
console.log(number3);

//absolute value
const number4 = Math.abs(-8);
console.log(number4);

//find smallest value
const numbers = [4, 2, -9, 9, 7];
const num = Math.min(...numbers);
console.log(num);

//find largest value
const num2 = Math.max(...numbers);
console.log(num2)

//convert stirngs to float
const str = '1.54';
const floatNum = parseFloat(str);
console.log(floatNum +1);

//convert string to int
const str2 = '9090'
const intnum = parseInt(str2)
console.log(intnum + 1)

//remove fractional 
const number5 = Math.trunc(4.15)
console.log(number5);

const number6 = 3.14
const isInt = Number.isInteger(number6)
console.log(isInt)

function square(nubmer){
  if(isNaN(nubmer))
    return 'invalid input'
  return number * number
}

console.log(square('a'))

const number7 = Math.pow(2, 3)
console.log(number7) 

const number8 = 16;
const sqr = Math.sqrt(number8);
console.log(sqr);

// check number sign
console.log(Math.sign('a'));

// infinity
const result = -3 / 0
console.log(result)

//random number
const random = Math.random();
console.log(random);

//high order function
function sum (fnumb , snum){
    return fnumb + snum 
}

function sub(fnum , snum){
    return fnum - snum 
}

function op(fnumb, snumb, opCallback){
    return `[:[${opCallback(fnumb, snumb)}]:]`
}

console.log(op(5, 3,sub))

//callback function with arrow functions
const sum2 = (fnumb , snumb) => fnumb + snumb

console.log(op(5, 2, sum))

//callback in string format
function format(message, formatCallback){
    return formatCallback(message)
}

function htmlformat(message){
    return `<div>${message}</div>`
}

function jsonformat(message){
    return `{"message": "${message}"}`
}

console.log(format("welcom", jsonformat))
console.log(format("welcom", htmlformat))

//advanced array
const colors =['red', 'blue', 'green'];
colors.forEach(function(currentv, index, arrat){
    console.log(index, currentv);
})

//some method
const age=[34, 64, 36, 28, 18]
const hasAdult = age.some(function(element){
    return element >= 18
})
console.log(hasAdult)

//every method
const areAdult = age.every(function(element){
    return element >= 18
})
console.log(areAdult)

// include method
const isInclude = colors.includes('red', 1)
console.log(isInclude)

// //indexOf and lastindexOf
const indexof = colors.indexOf('green', -2)
console.log(indexof);

const lastindex = colors.lastIndexOf('green', -2)
console.log(lastindex)

//findindex method
const index= age.findIndex(function(element){
    return element >= 25
})
console.log(index)

//find method 
const numbers2 = [11, 3, 6, 8]
const el = numbers2.find(function(element){
    return element % 4 === 0
})
console.log(el)

//filter method 
const evenum = numbers2.filter(function(currentValue){
    return currentValue % 2 === 0 
})
console.log(evenum)

//slice method 
const colors2 = ['balck', 'red', 'green', 'yellow', 'brown']
const slicevalue = colors2.slice(1, 4)
const splicevalue = colors2.splice(2, 0, 'gray', 'yellow')

//join method 
const strcolor = colors2.join('-')
console.log(strcolor)

//reverse method
colors2.reverse()

//map method 
const squarenum = numbers2.map(function(currentv){
    return currentv * currentv
})

// create object 
const car = {
    name: 'camry',
    color: 'white',
    currentspeed: 0,
    move: function(speed){
        this.currentspeed = speed
        return `The ${this.name} is moving st speed of ${this.currentspeed} km per hour`
    },
    stop: function(){
        this.currentspeed = 0
        return `The ${this.name} stopped`
    }
}

console.log(car.name);
car.stop()

//create class 
class Cars{
    constructor(name, color, currnetSpeed){
        this.name = name
        this.color = color
        this.currentSpeed = currnetSpeed
    }
    move(speed){
        this.currentSpeed = speed 
        return `The ${this.name} is moving st speed of ${this.currentspeed} km per hour`
    }
    stop(){
        this.currentspeed = 0
        return `The ${this.name} stopped`
    }
}

const car1 = new Cars('camry', 'white', 0)
const car2 = new Cars('corella', 'black', 0)
console.log(car1);
console.log(car2)

//call method
let user1 = {
    fname: "fatimah",
    lname: "khalid",
}
   let printFullName = function(){
        console.log("Hello, "+this.fname+" "+this.lname);
    }    

printFullName.call(user1);

//Arrow funciton
let add = (num1, num2, num3) => num1 + num2 + num3

let result2 = num1 => {let result2 = num1}

let print = () => console.log("This arrow function has nor parameters")

//IIFEs
(function(n){
    console.log(n);
})("Reem");

function recarea(w, l){
    let a = w * l
}

let area = recarea(4, 2, 5)
