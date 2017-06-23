/*eslint-env jquery */
$ (':header').addClass('headline');
$ ('li:lt(3)').hide().fadeIn(3000);
$ ('li').on('click', function()  {
     $(this).remove();
});
