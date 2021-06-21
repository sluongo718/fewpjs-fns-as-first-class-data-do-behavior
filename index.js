/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeStr) {
  const timeInt = parseInt(timeStr.split(":")[0])

  if (timeInt < 12) {
    return 'Good Morning';
  } else if (timeInt >= 12 && timeInt <= 16) {
    return 'Good Afternoon';
  } else if (timeInt > 16){
    return 'Good Evening';
  }
  
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  const greeting = document.querySelector('#greeting');
  greeting.innerText = string
}