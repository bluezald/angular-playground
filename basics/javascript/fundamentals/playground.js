let jsonIn = 
 `
    [
        {"cardId" : 123},
        {"cardId" : 123},
        {"cardId" : 123}
    ]
 `;

 let carIds = JSON.parse(jsonIn);
 console.log( carIds );

 let cars = [
    { carId: 123, style: "sedan" },
    { carId: 456, style: "convertible" },
    { carId: 789, style: "sedan" }
 ];

 cars.forEach( car => console.log(car.carId, car.style) );

 let convertibles = cars.filter( car => car.style === "convertible" );
 console.log(convertibles);

 let car = cars.find( car => car.carId > 500 );
 console.log(car);

class Vehicle {
    constructor() {
        this.type = "car";
    }
    start() {
        return `Starting: ${this.type}`;
    }
}

class Car extends Vehicle {

}
let car2 = new Car();
console.log(car2.type);