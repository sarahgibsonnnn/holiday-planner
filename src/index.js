function displayHolidaySuggestion(response) {
    new Typewriter('#suggestions', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: ""
    });
}
function generateHoliday(event) {
    event.preventDefault();
    new Typewriter('#suggestions', {
        strings: "Loading suggestions...",
        autoStart: true,
        delay: 1,
        cursor: ""
    });

    let holidayDestination = document.querySelector('#destination').value;
    let holidayVibe = document.querySelector('#vibe').value;
    let holidayDuration = document.querySelector('#duration').value;

    let apiKey = "437ef9o0be73d0f0ba5417et36b11c7f";
    let apiContext = "Generate 1 holiday suggestion based on the user's input. You are an experienced traveller. Keep the suggestions concise and mention specific locations, relevant to the user's preferences. The suggestion should be formatted using html and divided by day displaying each activity as a <li> in a <ul>. Each day should be split by rough times, such as morning, afternoon and evening activities. repeat this for each day of the trip. Include a brief description of the destination, highlighting its unique features and attractions and any journey times between each location. The suggestion should be suitable for a general audience, avoiding overly technical language or jargon. Suggest an overall price  in GBP for each activity listed. Do not include the intial '```html' in the answer."
   // let apiContext = "Generate a holiday suggestion based on the user's input. "

    let apiPrompt = `Suggest a ${holidayDuration} day trip to ${holidayDestination} for a ${holidayVibe} experience.`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${apiPrompt}&context=${apiContext}&key=${apiKey}`    

    axios.get(apiURL).then(displayHolidaySuggestion);
    
   
}


let holidayFormElement = document.querySelector('#holiday-form');
holidayFormElement.addEventListener('submit', generateHoliday); {

}