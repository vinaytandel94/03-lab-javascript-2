(function(){

  let myName = document.getElementById("my-name"); 
  let getName = document.getElementById("get-name");
  let userName = document.getElementById("user-name"); 
  let nameStored = localStorage.name;

  // Displays the name in the console at this stage:
  console.log(`Name on page load: ${nameStored}`);
  
  if(nameStored) {
    // If there's a name in localStorage, use it:
    myName.innerHTML = `again ${nameStored}`;
    console.log(`Name stored is: ${nameStored}`);
  }
  else {
    // There's no name in localStorage:
    myName.innerHTML = "stranger";
    console.log(`No name stored`);
  }

  function PerformGreeting() {
    if(userName.value === "") {
      alert("Please enter a name");
      userName.focus();
    }
    // Gets the name the user entered:
    nameStored = userName.value;
    
    // Shows the name in "my-name":
    myName.innerHTML = nameStored;
    
    // Puts the name into localStorage:
    localStorage.name = nameStored;
    
    // Displays the name in the console at the final stage:
    console.log(`New name stored: ${nameStored}`);
    
    return false;
  }

  function clearData() {
    console.log(`before clear: ${localStorage.name}`);

    // Clears all Local Storage data:
    localStorage.clear();

    // Clears one key-value pair, in this case 'name':
    // delete localStorage.name;
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
