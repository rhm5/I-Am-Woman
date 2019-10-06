(function () {

var tot = document.querySelector(".counter__divider");
  var total = tot.textContent; 
  var b = 1;

$(".prev, .next").on("click", function() {
  b = $(this).hasClass("next") ? ++b : --b;
  b = b > total ? 1 : (b < 1 ? total : b);
  $(".counter__current").text(b);
});

})();