# GitHubFollowingHack (THIS PROJECT IS NO LONGER MAINTAINED)


## Getting Started

1. add chrome extension `cjs` (add jQuery)
2. add the following code
3. find a github rockstar user (40k+ follower)
4. goto followers or following page -> refresh page ... 


```javascript
$(document).ready(function() {
  //page 1
  var bt_disabled = $('.pagination span').text() === "Previous";
  //last page, not prev/next btn
  var pre_next_btn = $('.pagination a').length;

  //ex: "?page=100&tab=following"
  var urlPara = location.search;
  
  var currentPage = location.search.match(/-?\d+\.?\d*/) ? parseInt(location.search.match(/-?\d+\.?\d*/)[0]) : 0;
  //remove all unfollow form
  $('.unfollow').remove();

  $('.follow button').each(function(index, value) {
    let _this = $(this);
    setTimeout(function() {
      _this.trigger('click');
    }, index * 40);
  });
  setTimeout(function() {
    if (bt_disabled) {
      $('.pagination a')[0].click();
    } else if (pre_next_btn === 0) {
      console.log('done......');
    } else {
      window.location = window.location.pathname + location.search.replace(currentPage, currentPage + 1);
    }
  }, 3500);
});


```

## ~~What's next?~~
~~Current speed: 12 following / sec (43,000 / hour), it is easy to get 300k following but to scale up to 10 million following this is slow. ~~


### ~~NEXT To-Do:~~
~~scale up? 10 million following target (crawler? hashmap? Search tree? Github API?)~~


#THIS PROJECT IS NO LONGER MAINTAINED
