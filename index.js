/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(str) {
  let time = parseInt( str, 10 );
  if ( time < 12) return "Good Morning"
  if ( time > 17) return "Good Evening"
  return "Good Afternoon"
}

function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}
