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
      (month === 7 && day >= 22) ||
      (month === 11 && day < 21);  

    output.textContent = inRange ? "It IS autumn" : "It is NOT autumn :(";
    }

// runs all of the marquee and date on the loading of the website
window.onload = function() {


const todaysDate = new Date();
 const todaysMonth = todaysDate.getMonth() + 1;
 const todaysDay = todaysDate.getDate();
 const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 const todaysWeekday = weekdays[todaysDate.getDay()];

 
 const output3 = document.getElementById("Date");
 output3.textContent = todaysMonth + "/" + todaysDay + ", " + todaysWeekday;
 
};

