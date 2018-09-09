$(window).load(function() {
  //MENU MOBILE
  $( ".menu-mobile" ).click(function() {
    $( ".header-nav-links" ).slideToggle("fast");
  });
  //BTN-ADD
  $( ".btn-add" ).click(function() {
    $(this).toggleClass("btn-add-success");
    $(this).parent().find(".btn-view").toggle();
  });
  //LOADER-BOOKER
  $( ".btn-search-action" ).click(function() {
    $( ".booker-loader" ).fadeIn("fast");
  });
  //MENU-FILTER-MOBILE
  $( ".link-filter-mobile" ).click(function(event) {
     event.preventDefault();
    $( ".list-search" ).slideToggle("fast");
  });
});
