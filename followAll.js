// DALIN H
// add chrome extension `cjs`
// add the following code
// find a github rockstar user (40k+ follower), goto his/her following page (refresh..)
// star following people =D

// SOVLED note that at page 100 you will be stuck since NEXT button is disabled (and the url is gone)
// SOLUTION directly update URL to goto next page

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
      $('.pagination a').click();
    } else if (pre_next_btn === 0) {
      alert('DONE!');
    } else {
      window.location = window.location.pathname + location.search.replace(currentPage, currentPage + 1);
    }
  }, 3500);
});


