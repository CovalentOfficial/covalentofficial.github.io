var startDate = new Date("Sun, 01 May 2021 00:00:00 UTC");

var registerActive = false;
var subscribeActive = false;

var countdown = $("#countdown");

var edge;

function updateTime() {
    var currentDate = new Date().getTime(); //same thing as above
    var timeLeft = startDate - currentDate; //difference between time you set and now in miliseconds

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); //conversion miliseconds on days 
    if (days < 10) days="0"+days; //if number of days is below 10, programm is writing "0" before 9, that's why you see "09" instead of "9"
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); //conversion miliseconds on hours
    if (hours < 10) hours="0"+hours;
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)); //conversion miliseconds on minutes 
    if (minutes < 10) minutes="0"+minutes;
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);//conversion miliseconds on seconds
    if (seconds < 10) seconds="0"+seconds;

    countdown.children('.days').children('.count').text(days);
    countdown.children('.hours').children('.count').text(hours);
    countdown.children('.minutes').children('.count').text(minutes);
    countdown.children('.seconds').children('.count').text(seconds);
}

function updateCount(){
    var currentDate = new Date().getTime();
    var currentCount = Math.floor((startDate - currentDate) / 1000 * 300);
    $('#countOfTokens').text(currentCount);

}

$(window).ready(function(){
    width = $('.sideway-info').width();
    edge = $('.info-block').offset().top - 25;
    $('.row').fadeTo('slow', 1);
    updateTime();
    updateCount();
    TimeTiming = setInterval(updateTime, 1000);
    CountTiming = setInterval(updateCount, 5000);
 });

function copyFunc(id){
    $(id).select();
    document.execCommand("copy");
    document.activeElement.selectionStart = document.activeElement.selectionEnd;

    $(id + '+ > .popup-msg').fadeTo('slow', '0.4');
    $(id + '+ > .popup-msg').fadeTo('slow', '0');
}

function register(){
    if(registerActive){
        $('#reg-done').fadeOut("slow");
    } else{
        $('#reg-done').fadeIn("slow");
    }
    registerActive = !registerActive;
}

function subscribe(){
    if(subscribeActive){
        $('#sub-done').fadeOut("slow");
    } else{
        $('#sub-done').fadeIn("slow");
    }
    subscribeActive = !subscribeActive;
}

window.onresize = function(){
    width = $('.sideway-info').width();
}
window.onscroll = function(){
    var getScr = $(document).scrollTop();
    if(getScr > edge){
        $('.info-block').addClass("fixed").css('width', width);
    } else{
        $('.info-block').removeClass("fixed");
    }
}