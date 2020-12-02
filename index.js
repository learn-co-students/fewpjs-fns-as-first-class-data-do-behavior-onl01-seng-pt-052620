/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById("time").value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of displayMessage() */

function displayMessage(message) {
  document.getElementById("greeting").innerText = message;
}

function greet(timeString) {
  const currentTime = parseInt(timeString, 10);
  if (currentTime <= 12) return "Good Morning";
  if (currentTime >= 17) return "Good Evening";
  else return "Good Afternoon";
}

/*
When using .getElementById do not use # in the argument 
innerText => This only returns the text
innerHTML => This returns everything including html tags and elements. 
*/

