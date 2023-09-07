window.onload = () => {

    //selecting elements
    let day = document.querySelector('#day'),
    utc = document.querySelector('#utc');

    //function for getting the day of the week
    let getDay = () => {
        const today = new Date(),
        
        options = {
        weekday: 'long'
        };
        
        return today.toLocaleDateString('en-US', options);
    }
    //appending the day value to the HTML
    day.innerText = getDay();
    

    //function for getting the current UTC
    let getUTC = () => {
        const date = new Date(),
        hour = date.getUTCHours() ,
        min = date.getUTCMinutes(),
        sec = date.getUTCSeconds();
        
        return utc.innerText = `${hour < 10 ? '0'+hour : hour}:${min < 10 ? '0'+min : min}:${sec < 10 ? '0'+sec : sec} ${hour < 12 ? 'AM' : 'PM'}`;
    }
    
    setInterval(getUTC, 1000);
}