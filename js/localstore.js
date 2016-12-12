(function(){

  var myName = document.getElementById("my-name"); 
  var userName = document.getElementById("user-name"); 
  var getName = document.getElementById("get-name");
  var myHeader = document.getElementById("my-header");
  
  function PerformGreeting() {
    myName.innerHTML = userName.value;
    myHeader.innerHTML = userName.value;
    myHeader.classList.add("change-me");
    return false;
  }
  if (typeof event === "undefined") {
    getName.onsubmit = PerformGreeting; //Firefox
  } else {
    getName.addEventListener("submit", PerformGreeting);
    event.preventDefault();
  }

}());
