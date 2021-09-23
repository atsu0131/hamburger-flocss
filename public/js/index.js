$(function () {
  $(".c-menu__button").on("click", function () {
    if ($(".p-sidemenu").hasClass("off")) {
      $(".p-sidemenu").removeClass("off");
      // $("#c-is-button").animate({ marginLeft: "400px" }, 300).addClass("on");
    } else {
      $(".p-sidemenu").addClass("off");
      // $(".p-sidemenu").animate({ right: "0" }, 300);
    }
  });
  $(".batsu").on("click", function () {
    // $(".p-sidemenu").animate({ right: "-367px" }, 300);
    $(".p-sidemenu").toggleClass("off");
  });
});
