# GitHubFollowingHack


## Getting Started

1. add chrome extension `cjs` (add jQuery)
2. add the following code
3. goto followers or following page -> refresh page ... 


```javascript

$(document).ready(function() {
  // 1~2 sec
  var seed = parseInt(Math.random() * 1000) + 1000;
  
  //page 1
  var bt_disabled = $('.pagination span').text() === "Previous";
  
  //last page, not prev/next btn
  var pre_next_btn = $('.pagination a').length;
  
  //users haven't been followed this page
  var users = $('.follow button');

  //ex: "?page=100&tab=following"
  var urlPara = location.search;
  
  var currentPage = location.search.match(/-?\d+\.?\d*/) ? parseInt(location.search.match(/-?\d+\.?\d*/)[0]) : 0;
  
  //remove all unfollow form
  $('.unfollow').remove();

  users.each(function(index, value) {
    let _this = $(this);
    setTimeout(function() {
      _this.trigger('click');
    }, index * seed);
  });
  
  setTimeout(function() {
    if (bt_disabled) {
      $('.pagination a')[0].click();
    } else if (pre_next_btn === 0) {
      console.log('done......');
    } else {
      window.location = window.location.pathname + location.search.replace(currentPage, currentPage + 1);
    }
  }, users.length * seed);
});


```

## ~~What's next?~~
~~Current speed: 12 following / sec (43,000 / hour), it is easy to get 300k following but to scale up to 10 million following this is slow.~~


### make sure you know what you are doing... LoL (your account could be suspended...)
