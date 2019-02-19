$("#loginUsername, #loginPassword").bind('input propertychange', function () {
    if (!this.value) {
        $(this).removeClass('float-true');
        $(this).prev().removeClass('float-true');
    }
    if (this.value) {
        $(this).addClass('float-true');
        $(this).prev().addClass('float-true');
    }
});