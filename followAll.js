// DALIN H
// add chrome extension `cjs`
// add the following code
// find a github rockstar user (40k+ follower), goto his/her following page (refresh..)
// star following people =D
// note that at page 99/100 you will be stuck since NEXT button is disabled (we need to undisable it)

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
