// JS Goes here - ES6 supported

import $ from "jquery";
import "bootstrap";
import feather from "feather-icons";
import "magnific-popup";
import "./css/vendor/magnific-popup.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
import "./scss/style.scss";

console.info("Made with ❤ by greive.tech");

/* Template Name: Landrick - Saas & Software Landing Page Template
   Author: Shreethemes
   E-mail: shreethemes@gmail.com
   Created: August 2019
   Version: 2.5
   Updated: July 2020
   File Description: Main JS file of the template
*/

// Loader
$(window).on("load", function() {
  $("#status").fadeOut();
  $("#preloader").delay(350).fadeOut("slow");
  $("body").delay(350).css({
    "overflow": "visible"
  });
});

// Menu
$(".navbar-toggle").on("click", function(event) {
  $(this).toggleClass("open");
  $("#navigation").slideToggle(400);
});

$(".navigation-menu>li").slice(-1).addClass("last-elements");

$(".menu-arrow,.submenu-arrow").on("click", function(e) {
  if ($(window).width() < 992) {
    e.preventDefault();
    $(this).parent("li").toggleClass("open").find(".submenu:first").toggleClass("open");
  }
});

document.querySelectorAll(".navigation-menu a").forEach((item) => {
  if (item.href === window.location.href) {
    const menuLinks = [
      item.closest("li"),
      item.closest(".has-submenu"),
      item.closest(".navigation-menu > .has-submenu")
    ];
    menuLinks.forEach((nav) => {
      nav ? nav.classList.add("active") : null;
    });
  }
});

// Clickable Menu
$(".has-submenu a").click(function(e) {
  if (window.innerWidth < 992) {
    if ($(this).siblings(".submenu").length) {
      e.preventDefault();
    }

    $(this).siblings(".submenu").toggleClass("open");
    $(this).parent().toggleClass("open");
  }
});

$(".mouse-down").on("click", function(event) {
  const $anchor = $(this);
  $("html, body").stop().animate({
    scrollTop: $($anchor.attr("href")).offset().top - 72
  }, 1500, "easeInOutExpo");
  event.preventDefault();
});

// Sticky
$(window).scroll(function() {
  const scroll = $(window).scrollTop();

  if (scroll >= 50) {
    $(".sticky").addClass("nav-sticky");
  } else {
    $(".sticky").removeClass("nav-sticky");
  }
});

// Back to top
const btnBackTop = $(".back-to-top");
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    btnBackTop.fadeIn();
  } else {
    btnBackTop.fadeOut();
  }
});
btnBackTop.click(function() {
  $("html, body").animate({scrollTop: 0}, 500);
  return false;
});

// Tooltip
$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});
// Popover
$(function() {
  $('[data-toggle="popover"]').popover();
});

// Feather Icons
feather.replace();

// Magnific Popup
$(document).ready(function() {
  if ($(".video-play-icon").length) {
    $(".video-play-icon").magnificPopup({
      disableOn: 375,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  }

  $(".owl-carousel").owlCarousel();
});
