window.onload = function() {
  // for menu
  btnMobile.onclick = function() {
    menu.classList.toggle("js-display-flex");
    menu.classList.toggle("js-menu-mobile-view");
  };
  window.onresize = function() {
    if (window.innerWidth >= 960) {
      removeClassCss("js-display-flex", "js-menu-mobile-view");
    }
  };
  window.onscroll = function() {
    if (document.scrollingElement.scrollTop > 80) {
      removeClassCss("js-display-flex", "js-menu-mobile-view");
    }
  };
  //for video
  let currentFrame = 0;
  btnVideoPlay.addEventListener("click", () => {
    btnVideoPlay.classList.toggle("js-opacity");
    video.volume = 0.04;
    video.paused ? video.play() : video.pause();
    if (video.paused) {
      currentFrame = video.currentTime;
      video.load();
    } else {
      video.currentTime = currentFrame;
    }
  });
};

function removeClassCss(a, b) {
  if (menu.classList.contains(a) && menu.classList.contains(b)) {
    menu.classList.remove(a);
    menu.classList.remove(b);
  }
}

//--JQuery syntax--
// open close section partners
$("#btnShowPartners").click(function() {
  $("#partnersContentHidden").toggle();
});

// menu click scroll
$(document).ready(function() {
  $("nav li a").click(function() {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({ scrollTop: destination }, 2000);
  });
});
