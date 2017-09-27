// DALIN H
// add chrome extension `cjs`
// add the following code
// find a github rockstar user (40k+ follower), goto his/her following page (refresh..)
// star following people =D

// SOVLED note that at page 100 you will be stuck since NEXT button is disabled (and the url is gone)
// SOLUTION directly update URL to goto next page

$(document).ready(function() {
	//ex: "?page=100&tab=following"
	var urlPara = location.search;
  var currentPage = parseInt(urlPara.match(/-?\d+\.?\d*/)[0]);
  
  $('.unfollow').remove();
  
  	$('.follow button').each(function(index, value) {
  	    let _this = $(this);
    	setTimeout(function() {
      		_this.trigger('click');
        }, index*40);
    });
    setTimeout(function() {
      window.location = window.location.pathname + location.search.replace(currentPage, currentPage+1)
    }, 3500);
});

