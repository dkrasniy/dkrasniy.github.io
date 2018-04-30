(function($) {


    // FLoating labels
    $("#loginUsername, #inputPassword").bind('input propertychange', function () {
        if (!this.value) {
            $(this).removeClass('float-true');
            $(this).prev().removeClass('float-true');
        }
        if (this.value) {
            $(this).addClass('float-true');
            $(this).prev().addClass('float-true');
        }
    });

    // Login pages overlay
    $('a[href="#contactInfo"]').click(function(event){
        event.preventDefault();
        $('.contact-us-section').addClass('open');
    });
    $('#closeModal').click(function(event) {
        event.preventDefault();
        $('.contact-us-section').removeClass('open');
    });

    var bottomFixedNavHeight = $('.bottom-nav').height();

    var cardActionHeight = $('.card-action').height();
    $('.card-action').css('padding-bottom', (bottomFixedNavHeight+15)+'px');

    //if null set to 0
    if (!bottomFixedNavHeight) {
        bottomFixedNavHeight = 20;
    }
    if (!cardActionHeight) {
        cardActionHeight = 0;
    }
    var bottomPaddingToAdd = bottomFixedNavHeight + cardActionHeight;

    console.log(bottomPaddingToAdd);
    $('body').css('padding-bottom', (bottomPaddingToAdd+20)+'px');



    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    // Get the device pixel ratio
    var ratio = window.devicePixelRatio || 1;

    // Define the users device screen dimensions
    var screen = {
        width : window.screen.width * ratio,
        height : window.screen.height * ratio
    };

    // iPhone X Detection
    if (iOS && screen.width == 1125 && screen.height === 2436) {
        $('body').addClass('iPhoneX');
    }


})(jQuery);


