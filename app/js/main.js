$(function () {
  /**
   * Burger
   */

  $(".burger").on("click", function () {
    $(this).children().toggleClass("active");
    $(".nav").toggleClass("active");
    return false;
  });
});
