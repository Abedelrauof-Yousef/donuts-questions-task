// // Ex1
// var userName = prompt("What is your name ?");

// var gender = prompt("What is your Gender ?");

// if (gender == "Male" || gender == "male"){
//     alert("Hello Mr " + userName +"!");
// } else if (gender == "Female" || gender == "female"){
//     alert("Hello Mrs " + userName + "!");
// } else {
//     alert("Welcome Stranger!")
// }

// alert("Mr " + userName + ", What would you like to order, Donuts, Ice Cream, Coffe or Bakery")

// var order = prompt("What is your order")

// if(order == "Donuts" || order == "donuts"){
//     alert(userName + " You've ordered donuts")
// } else if (order == "Ice Cream" || order == "ice cream"){
//     alert(userName + " You've ordered Ice Cream")
// } else if (order == "Coffee" || order == "coffee"){
//     alert(userName + " You've ordered Coffe")
// } else if (order == "Bakery" || order == "bakery"){
//     alert(userName + " You've ordered Bakery")
// }

// alert("Your order is being prepared")

// console.log(userName + " you've ordered " + order + " Thank you for using our application");




// Ex2
//   let userGender = prompt("Please enter your gender (male/female):");
// while (userGender !== "male" && userGender !== "female") {
//   userGender = prompt("Please enter your gender (male/female):");
//   if (userGender === "male" || userGender === "female") {
//     break;
//   }
// }

// alert("Thank you! Your gender is recorded as " + userGender);

// let arrayData = [userName, gender, order];
// for (let i = 0; i < arrayData.length; i++){

// console.log(arrayData[i]);
// }




// Ex3
// function chooseGender() {
//   let userGender = prompt("Please enter your gender (male/female):");
//   while (userGender !== "male" && userGender !== "female") {
//     userGender = prompt("Please enter your gender (male/female):");
//     if (userGender === "male" || userGender === "female") {
//       break;
//     }
//   }
// }
// chooseGender();




// Ex4
// let user_Name = document.getElementById("userName");
// let userInformation = document.getElementById("userInformation");
// let userData = userInformation.getElementsByTagName("li");
// let heroDis = document.createElement("p");
// let userInformationSection = document.getElementById("userInformationSection");
// user_Name.innerText = ("Order maker is: " + userName) ;
// userData[0].innerText = ("Gender of the order maker is: " + gender);
// userData[1].innerText = ("The order  you've ordered is: " + order);
// heroDis.innerText = "we believe every day is a little sweeter with a donut in hand. Our artisanal donuts are handcrafted with love, using the finest ingredients to create a melt-in-your-mouth experience. From classic flavors to innovative creations, there's a perfect treat waiting for you. Join us for a bite of happiness!"
// heroDis.style.textAlign = "center"
// heroDis.style.fontSize = "larger"
// heroDis.style.marginTop = "50px"
// userInformationSection.appendChild(heroDis);


// Ex5
// document.addEventListener('DOMContentLoaded', (event) => {
//     let form = document.getElementById("form");

//     form.addEventListener("submit", function(event) {
//         event.preventDefault();

//         let userNameValue = document.getElementById("userName").value;
//         let ageValue = document.getElementById("age").value;
//         let genderValue = document.getElementById("gender").value;
//         let orderTypeValue = document.getElementById("orderType").value;

//         let drinkValue = '';
//         if (document.getElementById('hotDrink').checked) {
//             drinkValue = document.getElementById('hotDrink').value;
//         } else {
//             drinkValue = document.getElementById('coldDrink').value;
//         }

//         const user = document.createElement("p");
//         const userValue = document.createTextNode(`Name: ${userNameValue}, Age: ${ageValue}, Gender: ${genderValue}, Order Type: ${orderTypeValue}, Drink: ${drinkValue}`);
//         user.appendChild(userValue);

//         const element = document.getElementById("test");
//         element.appendChild(user);
//     });
// }); 
