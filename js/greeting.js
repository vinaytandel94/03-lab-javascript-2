/*
The code below is wrapped in an "(anonymous) self-executing function"
or "Immediately-invoked Function Expression" (IIFE). It is "anonymous"
because it has/needs no name.

This is good practice because:
- local references to objects decrease lookup times
- it keeps your variables out of the global namespace
*/

(function(){

  var myName = document.getElementById("my-name"); 
  var userName = document.getElementById("user-name"); 
  var getName = document.getElementById("get-name");

  function PerformGreeting() {
    myName.innerHTML = userName.value;

    /*
    Without setting the variables first, this would be longer:
    */
    // document.getElementById("my-name").innerHTML =
    // document.getElementById("user-name").value;
  }

  /*
  Event Listeners keep your JavaScript out of your HTML markup -
  most professional developers avoid (e.g.) "onclick" in HTML tags.
  Also, you can attach multiple events to any single element.
  */
  getName.addEventListener("submit", PerformGreeting);

  /*
  Uncomment the line below - see what happens when you click
  somewhere outside the input "submit" button. Why?
  */
  // getName.addEventListener("click", PerformGreeting);

})(); 

// the final brackets () make the anonymous function execute immediately

