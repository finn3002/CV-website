// {
// $(".clickhome").click(function () {
//   $("html,body").animate({ scrollTop: $("#hero").offset().top }, 2000);
// });

//   $(".clickabout").click(function () {
//     $("html,body").animate({ scrollTop: $("#about").offset().top }, 2000);
//   });

//   $(".clickskill").click(function () {
//     $("html,body").animate({ scrollTop: $("#skill").offset().top }, 2000);
//   });
// }
window.sr = ScrollReveal();

sr.reveal(".animate-left", {
  origin: "left",
  duration: 800,
  distance: "2.5rem",
  delay: 100,
});

sr.reveal(".animate-right", {
  origin: "right",
  duration: 800,
  distance: "2.5rem",
  delay: 100,
});
sr.reveal(".animate-", {
  origin: "right",
  duration: 800,
  distance: "2.5rem",
  delay: 100,
});

const btnScrollToTop = document.querySelector("#btnScrollToTop");
btnScrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

$(".navbar-toggler").click(function () {
  // 當點擊導覽按鈕後，要做的事情
  // alert("妳好");
  // console.log("妳好")
  $(".navbar-list").toggleClass("active");
  $(".line").toggleClass("rotate");
});

// 頁面滑動
$(".navbar a ").click(function (e) {
  if (this.hash !== "") {
    e.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});
