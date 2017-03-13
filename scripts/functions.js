$(document).ready(function() {
    var window_width = $(window).width();

    //if javascript enabled, and in mobile view, show the collapsed nav bar
    if (window_width < 750) {
        $('#hamburger-button').show();
        $('#nav-links').hide();
        $('#nav-links>li').css('display', 'block');
    } else {
        $('#nav-links').show();
        $('#nav-links>li').css('display', 'inline-block');
    }

    //when the window size changes
    $(window).resize(function() {
        //update window width
        window_width = $(window).width();

        //hide the hamburger, show the links
        if (window_width >= 750) {
            $('#hamburger-button').hide();
            $('#nav-links').show();
            $('#nav-links>li').css('display', 'inline-block');
        } else {
            $('#hamburger-button').show();
            $('#nav-links').hide();
            $('#nav-links>li').css('display', 'block');
        }
    });

    //nav menu
    $('#hamburger-button').on('click', function() {
        $('#nav-links').slideToggle();
    });

    //like counter
    $('body').on('click', '.like-button', function() {
        //get the number of counts
        var num = parseInt($(this).siblings('.like-counter').text(), 10);
        //increment by 1
        var next = num + 1;
        //set as new text
        $(this).siblings('.like-counter').text(next);
    });

});
