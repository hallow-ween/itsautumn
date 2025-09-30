 const waitTwoSeconds = setTimeout(newsletterAlert, 2000); // waits to trigger the alerts
     
     function newsletterAlert() {
     alert("Subscribe to the newsletter! (Down below in the footer)")
      }

    function autumnChecker() {
    const output = document.getElementById("IsItAutumn");

  
    const currentDay = new Date();
    const month = currentDay.getMonth(); 
    const day = currentDay.getDate();

  
    const inRange =
      (month >= 7 && month <= 11) ||
      (month === $ && day >= 22) ||
      (month === 11 && day < 21);  

    output.textContent = inRange ? "It IS autumn" : "It is NOT autumn :(";
    }

// runs all of the marquee and date on the loading of the website
window.onload = function() {   

   const min = 1;
  const max = 3;
  
 function genNum() {
 return Math.floor(Math.random() * (max - min + 1)) + min;

 const newNum = GenerateNum();
 const output2 = document.getElementById("scrollingText");
 

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

const todaysDate = new Date();
 const todaysMonth = todaysDate.getMonth() + 1;
 const todaysDay = todaysDate.getDate();
 const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 const todaysWeekday = weekdays[todaysDate.getDay()];

 
 const output3 = document.getElementById("Date");
 output3.textContent = todaysMonth + "/" + todaysDay + ", " + todaysWeekday;
 
};

