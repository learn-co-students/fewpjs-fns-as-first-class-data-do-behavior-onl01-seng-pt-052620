/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(givenTime) {
  let givenHour = parseInt(givenTime.slice(0, 2));
  if (0 <= givenHour && givenHour < 12) {
    return "Good Morning";
  } else if (12 <= givenHour && givenHour < 17 )  {
    return "Good Afternoon";
  } else if (17 <= givenHour &&givenHour < 24) {
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(greeting) {
  document.getElementById('greeting').innerText = greeting;
}
