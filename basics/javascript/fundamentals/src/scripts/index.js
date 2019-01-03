// import { Car } from "./models/car.js";

import { Car } from "./models/car.js";
import $ from "jquery";

let car = new Car(123456);
console.log(car.id);

console.log(location.href);

let promise = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "someValue");
});

promise.then(
    value => console.log("fulfilled: " + value),
    error => console.log("rejected: " + error)
);

// Data Access using HTTP

// XHR
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
    }
};

xhttp.open("GET", "https://5c2d9ff3b8051f0014cd47a4.mockapi.io/api/v1/users", true);
xhttp.send();

// JQuery
let promise2 = $.get("https://5c2d9ff3b8051f0014cd47a4.mockapi.io/api/v1/users");
promise2.then(
    data => console.log("success: ", data),
    error => console.log("error: ", error)
);

// HTTP Post in JQuery
// let user = {
//     name: "Vincent Bacalso",
//     avatar: "vincent.jpg"
// };
// let promise3 = $.post("https://5c2d9ff3b8051f0014cd47a4.mockapi.io/api/v1/users", user);
// promise3.then(
//     data => console.log("data: ", data),
//     error => console.log("error", error)
// );

// HTTP Post with Form and JQuery
let form = document.getElementById("user-form");

form.addEventListener("submit", event => {
    
    let firstname = form.elements["firstname"];
    let firstnameError = document.getElementById("firstname-error");

    let lastname = form.elements["lastname"];
    let lastnameError = document.getElementById("lastname-error");

    let noFirstnameError = true;
    let noLastnameError = true;

    event.preventDefault();
    console.log(firstname.value);
    console.log(lastname.value);

    if(firstname.value.length < 2) {
        firstnameError.textContent = "Invalid entry";
        firstnameError.style.color = "red";
        firstName.style.borderColor = "red";
        firstName.focus();
        noFirstnameError = false;
    }

    if(lastname.value.length < 2) {
        lastnameError.textContent = "Invalid entry";
        lastnameError.style.color = "red";
        lastname.style.borderColor = "red";
        lastname.focus();
        noLastnameError = false;
    }

    if(noFirstnameError && noLastnameError) {
        let user = {
            name: `${firstname} ${lastname}`,
            avatar: "default.jpg"
        };
    
        let promise = $.post("https://5c2d9ff3b8051f0014cd47a4.mockapi.io/api/v1/users", user);
        promise.then(
            data => console.log("data: ", data),
            error => console.log("error", error)
        );
    }

});

// let inputString = "alert('Warning: Your Computer is infected with a Virus');";

// eval(inputString);