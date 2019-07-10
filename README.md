# Note: Github fixed it so no longer works but someting interesting I found 🤣
GitHub fixed it by using Base64 encoded timestamp (LOL🤣) page index instead of page number so there is hard to quickly navigate to different pages as predict the excat timestamp is hard.

The page index looks like Base64 to me so I decoded some:

Following:
```
Y3Vyc29yOnYyOpK5MjAxOS0wNi0wOVQxOToyNDo0MC0wNDowMM4Cut97 -> cursor:v2:2019-06-09T19:24:40-04:00{
Y3Vyc29yOnYyOpK5MjAxOS0wNi0yNVQyMTo0NzoxNi0wNDowMM4Cwicz -> cursor:v2:2019-06-25T21:47:16-04:00'3
Y3Vyc29yOnYyOpK5MjAxOS0wNS0yNFQxMDowNDo1OC0wNDowMM4CsqPx -> cursor:v2:2019-05-24T10:04:58-04:00
```

Followers:
```
Y3Vyc29yOnYyOpK5MjAxNy0xMS0xMlQwMTowMToxMy0wNTowMM4Bve -> cursor:v2:2017-11-12T01:01:13-05:00
Y3Vyc29yOnYyOpK5MjAxNy0xMS0xMlQwMDo1ODo1Ny0wNTowMM4Bve9S -> cursor:v2:2017-11-12T00:58:57-05:00R
```

That makes sense because the timestamp is used for pagination now instead of page number (from the timestamp get 20 records).
I'm sure there is another easy way to get around this. Just don't have time to play with it.
Have fun!



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


### make sure you know what you are doing... LoL (your account could get suspended 😂😂😂 ...)
