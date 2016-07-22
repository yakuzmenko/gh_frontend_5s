$(document).ready(function() {

    // Timer function
    var timer = function(htmlElementId, start) {
        function leadingZero(time) {
            return (time < 10) ? "0" + time : time;
        }

        var timerObj,
            date;

        timerObj = document.getElementById(htmlElementId);

        date = new Date(start);
        setInterval(function() {
            date = new Date(date.getTime() + 1000);
            timerObj.innerHTML = leadingZero(date.getUTCHours()) +
                ':' + leadingZero(date.getMinutes()) +
                ':' + leadingZero(date.getSeconds());
        }, 1000);
    };

    // Call timer
    timer('timer', 0);
    timer('timer2', 10000);
    timer('timer3', 10000000);

    $('#timer').addClass('first-timer');
    $('.second-timer')
        .css({'background-color': 'red', 'color': '#fff'})
        .click(function() {
            $(this).fadeOut();
        });

    $('#timer3')
        .css({'border': '1px solid black', 'position': 'relative'})
        .on('click', function() {
            $(this).animate({
                opacity: 0.25,
                left: "+=50",
                height: "+=50"
            }, 5000, function() {
                $(this).animate({
                    opacity: 1,
                    left: "-=50",
                    height: "-=50"
                }, 5000);
            });
        });
});