$(function () {
  $('[data-toggle="popover"]').popover()
})

$(function () {
    $('.material-button-toggle').click(function () {
        $(this).toggleClass('open');
        $('.option').toggleClass('scale-on');
    });
});