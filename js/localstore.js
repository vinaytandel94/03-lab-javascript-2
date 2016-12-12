(function(){

  var myName = document.getElementById("my-name"); 
  var userName = document.getElementById("user-name"); 
  var getName = document.getElementById("get-name");
  var name = localStorage.name;
  console.log(`global: ${name}`);
  
  if(name !== userName.value) {
    myName.innerHTML = name;
    console.log(`If: ${name}`);
  } else {
    localStorage.name = userName.value;
    console.log(`Else: ${name}`);
  }

  function PerformGreeting() {
    name = userName.value;
    localStorage.name = name;
    console.log(`In function: ${name}`);
    return false;
  }

  if (typeof event === "undefined") {
    getName.onsubmit = PerformGreeting; //Firefox
  } else {
    getName.addEventListener("submit", PerformGreeting);
    event.preventDefault();
  }

}());
