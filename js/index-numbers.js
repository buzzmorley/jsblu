$(function()  {
    $('li:lt(3)').removeClass('hot');
    $('li').eq(0).addClass('complete');
    $('li:gt(0)').addClass('cool');
});