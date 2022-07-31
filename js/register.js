function handleFormSubmit(event) {
  /*
        this event will work when the user press
        on a button inside form,
        when user press on a button inside form,
        the browser will try to send the data from inputs to the server.
        we want to prevent it because it will clear our data
        and we wont be able to use it in javascript.
        event.preventDefault(); comand will stop the refresh
    */
  event.preventDefault();
  let emailInputValue = document.getElementById("emailInput").value;
  let passwordInputValue = document.getElementById("passwordInput").value;
  let nameInputValue = document.getElementById("nameInput").value;
  let lastNameInputValue = document.getElementById("lastNameInput").value;
  let ageInputValue = +document.getElementById("ageInput").value; //the + after the = convert the value from the ageInput to number from string
  let areaInputValue = document.getElementById("areaInput").value;
  const BASECOURSPRICE = 20000;
  const MAAAM = 1.17;
  let coursePrice = BASECOURSPRICE;
  //   console.log(ageInputValue + 5);
  if (ageInputValue <= 17) {
    alert("you are not allowed to join");
    return; //will stop the function here and the user will not be able to continue
  } else if (ageInputValue >= 18 && ageInputValue <= 40) {
    coursePrice *= 1.3;
  } else if (ageInputValue >= 41 && ageInputValue <= 60) {
    coursePrice *= 1.2;
  }
  if (areaInputValue == "Center") {
    coursePrice *= 1.5;
  } else if (areaInputValue == "North") {
    coursePrice *= 1.2;
  } else if (areaInputValue == "Lowland") {
    coursePrice *= 1.3;
  }
  coursePrice *= MAAAM;
  console.log("Your email is", emailInputValue);
  console.log("Your name is ", nameInputValue);
  console.log("Your last name is ", lastNameInputValue);
  console.log("Your age is ", ageInputValue);
  console.log("Your area is ", areaInputValue);
  console.log("Your curse price is ", coursePrice);
}
