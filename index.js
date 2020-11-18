/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet())
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

// function take one argument, 24 hour time format
function greet(timeStr) {
  // split at the :
  const nowTime = String(timeStr).split(':');
  // The parseInt function converts its 
  // first argument to a string, parses that string, 
  // then returns an integer or NaN.
  const nowHour = parseInt(nowTime[0]);
  // if statements for logic
  if (nowHour < 12 ){
    return "Good Morning";
  } else if (nowHour > 17){
    return "Good Evening";
  }
  return "Good Afternoon";
}

/* Write your implementation of displayMessage() */

// function one argument, a string
function displayMessage(message){
  // When the function runs it should update the text 
  // inside the #greeting node with the content of the argument.
  document.getElementById("greeting").innerText = message;
}