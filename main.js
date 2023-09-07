window.onload = () => {
    //selecting elements
    let day = document.querySelector('#day'),
    utc = document.querySelector('#utc');


    const today = new Date();

    //function for getting the day of the week
    let getDay = () => {
        options = {
        weekday: 'long'
        };
        return today.toLocaleDateString('en-US', options);
    }
    //appending the day value to the HTML
    day.innerText = getDay();
    

    //function for getting the current UTC
    let getUTC = () => {
        return today.getUTCMilliseconds();
    }
    utc.innerText = getUTC();
}