$(function()  {
    var listHeight = $('#page').height();
    $('ul').append('<p>Height: ' + listHeight + 'px</p>');
    $('li').width('50%');
    $('li#one').width(525);
    $('li#two').width('75%');
});