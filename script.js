function setClock() {
    const now = new Date();
    const hour = now.getHours() % 12;
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourDegree = (hour * 30) + (0.5 * minute);
    const minuteDegree = (minute * 6) + (0.1 * second);
    const secondDegree = second * 6;

    const hourHand = document.getElementById('hour');
    const minuteHand = document.getElementById('min');
    const secondHand = document.getElementById('sec');

    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
}

// Call setClock every second
setInterval(setClock, 1000);

// Run setClock once when the page loads to avoid delay in displaying the clock
setClock();



   


