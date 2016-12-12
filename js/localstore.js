(function(){

  let myName = document.getElementById("my-name"); 
  let getName = document.getElementById("get-name");
  let userName = document.getElementById("user-name"); 
  let nameStored = localStorage.name;
  console.log(`Name on page load: ${nameStored}`);
  
  if(nameStored !== userName.value) {
    myName.innerHTML = nameStored;
    console.log(`Name is new/changed: ${nameStored}`);
  }
  // else {
  //   localStorage.name = userName.value;
  //   console.log(`Set name to new input: ${nameStored}`);
  // }

  function PerformGreeting() {
    nameStored = userName.value;
    localStorage.name = nameStored;
    console.log(`Greetings: ${nameStored}`);
    return false;
  }

  if (typeof event === "undefined") {
    getName.onsubmit = PerformGreeting; //Firefox
  } else {
    getName.addEventListener("submit", PerformGreeting);
    event.preventDefault();
  }

}());
