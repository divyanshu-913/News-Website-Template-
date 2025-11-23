// class="menu-section

$(document).ready(function () {
  // For Open the Menu

  $("#Three-lines").click(function () {
    
    // $(".menu-section").animate({width:"100wh"});
    // $(".menu-section").css("display", "block");
    $(".menu-section").show();

    $(".menu-section").animate();

  });

  // For Close the Menu
  $("#close-menu").click(function () {
    $(".menu-section").css("display", "none");
  });
});
