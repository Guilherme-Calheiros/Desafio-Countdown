let day = document.getElementById('days'); 
let hour = document.getElementById('hours'); 
let minute = document.getElementById('minutes'); 
let second = document.getElementById('seconds'); 

const target_date = new Date(2023, 10, 20, 23, 59, 59)

function format_number(number){
    if (number < 10){
        return `0${number}`
    } else{
        return number
    }
}

function update_count(){
    const current_date = new Date();
    const time_difference = target_date - current_date;

    if (time_difference > 0){
        const days = Math.floor(time_difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time_difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((time_difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((time_difference % (1000 * 60)) / 1000);

        const format_days = format_number(days)
        const format_hours = format_number(hours)
        const format_minutes = format_number(minutes)
        const format_seconds = format_number(seconds)

        day.innerHTML = `${format_days}`
        hour.innerHTML = `${format_hours}`
        minute.innerHTML = `${format_minutes}`
        second.innerHTML = `${format_seconds}`
    }
}

setInterval(update_count, 1000);

update_count();