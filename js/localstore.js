(function(){

  let myName = document.getElementById("my-name"); 
  let getName = document.getElementById("get-name");
  let userName = document.getElementById("user-name");
  let chooseColor = document.getElementById("choose-color");
  let nameStored = localStorage.name;
  let colorStored = localStorage.color;
  
  console.log(`Name on page load: ${nameStored}`);
  
  if(nameStored) {
    myName.innerHTML = `again ${nameStored}!`;
    /*
      Adds the stored colour as a style attribute to the body tag.
      Can you create a CSS style and add a class to the body instead?
      See:
      https://www.w3.org/wiki/Dynamic_style_-_manipulating_CSS_with_JavaScript
    */
    document.body.style.backgroundColor = colorStored;
    console.log(`Name stored is: ${nameStored}`);
    console.log(`Colour stored is: ${colorStored}`);
  }
  else {
    myName.innerHTML = "stranger";
    console.log(`No name stored`);
  }

  function PerformGreeting() {
    if(userName.value === "") {
      alert("Please enter a name");
      userName.focus();
    }
    // Gets the chosen colour:
    console.log(chooseColor.value);
    document.body.style.backgroundColor = chooseColor.value;

    // Stores the name and colour the user entered:
    nameStored = userName.value;
    colorStored = chooseColor.value;

    // Shows the name in "my-name":
    myName.innerHTML = nameStored;

    // Puts the name and colour into localStorage:
    localStorage.name = nameStored;
    localStorage.color = colorStored;

    console.log(`New name stored: ${nameStored}`);

    return false;
  }

  function clearData() {
    console.log(`before clear: ${localStorage.name}`);
    localStorage.clear();
    console.log(`after clear: ${localStorage.name}`);
  }

  // Listens for a form submit action: 
  if (typeof event === "undefined") {
    getName.onsubmit = PerformGreeting; // for Firefox
  }
  else {
    getName.addEventListener("submit", PerformGreeting);
    event.preventDefault();
  }
  // Chrome/IE only
  getName.addEventListener("reset", clearData);

}());
