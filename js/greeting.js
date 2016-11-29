/*
An "Immediately-Invoked Function Expression" (IIFE) contains
all the code. the final brackets () ensure that it executes.

This is good practice because:
- it keeps your variables out of the global namespace
- local references to objects decrease lookup times
- it is a foundation for further code organisation

It is also an "anonymous" function because it has/needs no name.
*/

(function(){

  var myName = document.getElementById("my-name"); 
  var userName = document.getElementById("user-name"); 
  var getName = document.getElementById("get-name");
  var myHeader = document.getElementById("my-header");

  function PerformGreeting() {
    myName.innerHTML = userName.value;
    myHeader.innerHTML = userName.value;
    /*
    Without setting the variables first, this would be longer:
    */
    // document.getElementById("my-name").innerHTML =
    // document.getElementById("user-name").value;

    event.preventDefault(); // disables default form submission
    return false; // prevents further "bubbling" up of event
  }

  /*
  Event Listeners keep your JavaScript out of your HTML markup -
  most professional developers avoid (e.g.) "onclick" in HTML tags.
  Also, you can attach multiple events to any single element.
  */
  getName.addEventListener("submit", PerformGreeting);

  /*
  Uncomment the line below - see what happens when you click
  in the grey area outside the input "submit" button. Why?
  */
  // getName.addEventListener("click", PerformGreeting);

}());
// the final brackets () make the anonymous function execute immediately
