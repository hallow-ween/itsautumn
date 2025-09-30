 const waitTwoSeconds = setTimeout(newsletterAlert, 2000);
     
     function newsletterAlert() {
     alert("Subscribe to the newsletter! (Down below in the footer)")
      }

    function autumnChecker() {
    const output = document.getElementById("IsItAutumn");

  
    const currentDay = new Date();
    const month = currentDay.getMonth(); 
    const day = currentDay.getDate();

  
    const inRange =
      (month >= 8 && month <= 12) ||
      (month === 8 && day >= 22) ||
      (month === 12 && day < 21);  

    output.textContent = inRange ? "It IS autumn" : "It is NOT autumn :(";
    }

function GenerateNum() {
  const min = 1;
  const max = 3;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.onload = function () {
  const output2 = document.getElementById("scrollingText");
  const newNum = GenerateNum();

  if (newNum === 1) {
    output2.textContent = "Subscribe to the Newsletter!";
  }
  else if (newNum === 2) {
    output2.textContent = "Put the link in your bio!";
  }
  else if (newNum === 3) {
    output2.textContent = "Enjoy your time here!";
  }
};

window.onload =  function theDate() {
const todaysDate = new Date();
 const output3 = document.getElementById("Date");
 output3.textContent = todaysDate;

}
