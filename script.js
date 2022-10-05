let WeddingDay = new Date("Nov 4, 2022 08:00:00").getTime();

let $days = document.getElementById('days');
let $hours = document.getElementById('hours');
let $minutes = document.getElementById('minutes');
let $seconds = document.getElementById('seconds');

setInterval(function () {
    var now = new Date();
    var timeLeft = (WeddingDay - now) / 1000;
    updateclock(timeLeft);
}, 1000);

function updateclock(remainingtime) {
    let days = Math.floor(remainingtime / 86400);
    remainingtime -= days * 86400;

    let hours = Math.floor(remainingtime / 3600) % 24;
    remainingtime -= hours * 3600;

    let minutes = Math.floor(remainingtime / 60) % 60;
    remainingtime -= minutes * 60;

    let seconds = Math.floor(remainingtime % 60);

    $days.innerHTML = Number(days);
    $hours.innerHTML = Number(hours);
    $minutes.innerHTML = Number(minutes);
    $seconds.innerHTML = Number(seconds);
}

function Number(number) {
    return number < 10 ? "0" + number : number;
}

const sampul = jQuery('.modalx').data('sampul');
jQuery('.modalx').css('background-image', 'url(' + sampul + ')');
jQuery('body').css('overflow', 'hidden');
jQuery('.info_button .button').on('click', function () {
    jQuery('.modalx').addClass('removeModals');

    jQuery('body').css('overflow', 'auto');
    document.getElementById("song").play();
});

$(document).ready(function () {
    $(this).scrollTop(0);
});