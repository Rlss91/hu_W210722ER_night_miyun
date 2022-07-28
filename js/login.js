const emailFromServer = "kenny@gmail.com";
const passwordFromServer = "Aa123456";

console.log("hello world!");
console.log(5);
// alert("hello world!");
1 + 1;
console.log(1 + 1);
console.log("1 + 1");

let x = 5; // define variable called x
let sum = 8; // define variable called sum
// sum = sum + 5; //add to sum 5 => 8 + 5
sum += 5;
console.log(sum); //print the value of sum
//*TK: add to x 8 and display it in the console
x += 8;
console.log(x);

//declare function
function printHelloWorld() {
  console.log("hello world from function");
}

printHelloWorld(); //call to function

function handleBtnClick() {
  console.log("you clicked on a btn");
  /*
    document.getElementById will go to html,
    and will try to find the tag that has id="emailInput".
    .value will store the data that the user write in to the input tag.
  */
  let emailInput = document.getElementById("emailInput").value;
  console.log("emailInput", emailInput);
  let passwordInput = document.getElementById("passwordInput").value;
  console.log("passwordInput", passwordInput);
  if (emailInput == emailFromServer) {
    console.log("your email is good!");
  } else {
    console.log("your email is bad!");
  }
  if (passwordInput == passwordFromServer) {
    console.log("your password is good!");
  } else {
    console.log("your password is bad!");
  }
  if (emailInput == emailFromServer && passwordInput == passwordFromServer) {
    console.log("you allowed to enter");
    console.log("your email is " + emailInput);
    console.log("your password is " + passwordInput);
    window.location.href = "register.html"; //will transfer the user to register.html page
  } else {
    console.log("your email or password is incorrect");
  }
}
