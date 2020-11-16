/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(someTime) {
  const parsedTimeInt = parseInt(someTime.split(':').slice(0,1));
  if(parsedTimeInt < 12) {
    return 'Good Morning';
  } else if(parsedTimeInt >= 12 && parsedTimeInt < 17) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(messageString) {
  const greeting = document.getElementById('greeting');
  greeting.innerText = messageString;
}