// DALIN H
// add chrome extension `cjs`

$(document).ready(function() {
  $('.unfollow').remove();
  	$('.follow button').each(function(index, value) {
  	    let _this = $(this);
    	setTimeout(function() {
      		_this.trigger('click');
        }, index*40);
    });
    setTimeout(function() {
      $('.pagination a:last')[0].click();
    }, 3500);
});
