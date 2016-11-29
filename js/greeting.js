(function(){

  var myName = document.getElementById("my-name"); 
  var userName = document.getElementById("user-name"); 
  var getName = document.getElementById("get-name");
  var myHeader = document.getElementById("my-header");

  function PerformGreeting() {
    myName.innerHTML = userName.value;
    myHeader.innerHTML = userName.value;
    myHeader.classList.add("change-me");
    //NOT myHeader.className += " otherclass";
    
    event.preventDefault(); // disables default form submission
    return false; // prevents further "bubbling" up of event
  }

  // avoid JavaScript in HTML markup (e.g. no "onclick" in HTML tags)
  getName.addEventListener("submit", PerformGreeting);

}());
