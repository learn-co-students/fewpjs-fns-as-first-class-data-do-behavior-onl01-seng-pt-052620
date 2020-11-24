/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let time_split = time.split(":")
  let time_concat =time_split[0].concat(time_split[1])
  let result = parseInt(time_concat,10)

  if (result <1200)
  {
    return "Good Morning";
  }

  else if (result > 1700) {
    return "Good Evening";
  }

  else {
    return "Good Afternoon";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(msg){
  document.getElementById("greeting").innerText = msg;

}
