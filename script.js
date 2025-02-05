const countdownDate = new
Date("2024-12-01T00:00:00").getTime();

function updateCountdown() {
    const now = new
    Date().getTime();
    const distance = countdownDate - now; 

    const days = Math.floor(distance/(1000*60*60*24));
    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
    const seconds = math.floor((distance%(1000*60))/(1000));

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (distance < 0) {
        clearInterval(interval);

    document.querySelector(".countdown").innerHTML = "<h2>Product Launched!</h2>";    
    }
}
    const interval = setInterval(updateCountdown,1000);