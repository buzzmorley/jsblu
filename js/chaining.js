$('li[id!="one"]').hide().delay(1000).fadeIn(1800);   // semi-colon indicates end of chaining - can be writen on separate lines
$('li:first-child').addClass('next');
$('li.priority').addClass('highlight');