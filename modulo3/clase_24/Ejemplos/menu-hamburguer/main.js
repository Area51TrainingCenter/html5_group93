window.addEventListener("load", load);

function load() {
  window.addEventListener("resize", function(e) {
    var windowWidth = e.target.outerWidth;
    var ipadBreakPoint = 768;
    if (windowWidth <= ipadBreakPoint) {
      var mobileNav = document.querySelector(".mobile-nav");
      mobileNav.addEventListener("click", function() {
        var nav = $("#menu");
        nav.slideToggle(1000);
      });
    }
  });
}
