$(function () {
  /**
   * Burger
   */

  const $burger = $(".js-burger");
  const $nav = $(".js-nav");

  $burger.on("click", function () {
    $(this).toggleClass("active");
    $nav.slideToggle();
  });

  $(window).on("resize", function () {
    if ($(window).width() > 991) {
      $burger.removeClass("active");
      $nav.removeAttr("style");
    }
  });

  $(document).on("click", function (event) {
    if ($(event.target).closest(".js-nav, .js-burger").length === 0) {
      $burger.removeClass("active");
      $nav.slideUp();
    }
  });

  /**
   * Swiper gallery
   */

  new Swiper(".js-gallery-slider", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 24,
    navigation: {
      nextEl: ".js-gallery-next",
      prevEl: ".js-gallery-prev",
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      1300: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  /**
   * Swiper Advantages
   */

  new Swiper(".js-advantages-slider", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".js-advantages-next",
      prevEl: ".js-advantages-prev",
    },
  });

  /**
   * Tabs
   */

  const $servicesTab = $(".services__tab");
  const $servicesItems = $(".services__items");

  $servicesTab.on("click", function () {
    const index = $(this).index();

    if ($(this).hasClass("services__tab--active")) {
      return;
    }

    $servicesTab.removeClass("services__tab--active");
    $(this).addClass("services__tab--active");

    $servicesItems.hide().removeClass("services__items--active");
    $servicesItems
      .eq(index)
      .fadeIn()
      .addClass("services__items--active")
      .css("display", "grid");
  });


    /**
   * Swiper Advantage
   */

     new Swiper(".js-advantage-slider", {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".js-advantage-next",
        prevEl: ".js-advantage-prev",
      },
    });
});
