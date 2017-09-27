# GitHubFollowingHack


## Getting Started

1. add chrome extension `cjs` (add jQuery)
2. add the following code
3. find a github rockstar user (40k+ follower), goto his/her following page (refresh..)
4. ...


```javascript
$(document).ready(function() {
	//ex: "?page=100&tab=following"
	var urlPara = location.search;
  	var currentPage = parseInt(urlPara.match(/-?\d+\.?\d*/)[0]);
  	//remove all unfollow form
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
```

## NOTE:
BUG: note that at page 100 you will be stuck since NEXT button is disabled (and the url is gone)
SOLUTION(fixed): directly update URL to goto next page


## What's next?
Current speed: 12 following / sec (43,000 / hour), it is easy to get 300k following but to scale up to 10 million following this is slow. 


### NEXT To-Do:
scale up? 10 million following target (crawler? hashmap? Search tree?)
