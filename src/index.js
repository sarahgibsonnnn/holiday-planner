function generateHoliday(event) {
    event.preventDefault();
    
    let holidayDestination = document.querySelector('#destination').value;
    let holidayVibe = document.querySelector('#vibe').value;
    let holidayDuration = document.querySelector('#duration').value;
 
    new Typewriter('#suggestions', {
        strings: `How about a ${holidayDuration} trip to ${holidayDestination} for a ${holidayVibe} experience?`,
        autoStart: true,
        cursor: ""
      });
   
}


let holidayFormElement = document.querySelector('#holiday-form');
holidayFormElement.addEventListener('submit', generateHoliday); {

}