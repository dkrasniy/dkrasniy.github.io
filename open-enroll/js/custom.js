(function($) {

   var stickyBottomNavHeight = $('.bottom-nav').height();


    $('body').css('padding-bottom', (stickyBottomNavHeight+20)+'px');

    console.log(stickyBottomNavHeight);

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



})(jQuery);


