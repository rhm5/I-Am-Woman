(function () {

  var slider = document.querySelector('.blog__nav-wrapper'),
    thumb = slider.querySelector('.blog__thumb'),
    img = document.querySelector('.blog__items'),
    main = document.querySelector('.blog__slider');
  var max = slider.clientWidth - thumb.offsetWidth,
    i = img.querySelectorAll('.blog__item');
  var maxWidth = [].reduce.call(i, function (width, elem) {
    return width += elem.scrollWidth
  }, 0);
  var maxScroll = maxWidth - main.clientWidth;
  var price = document.querySelector('.blog__counter-current');
  var divider = document.querySelector('.blog__counter-divider');
  var maxPrice = 3;

  function showText() {
    
    thumb.onmousedown = function (e) {
      var xShift = e.clientX - thumb.offsetLeft;
      document.onmousemove = function (e) {
        var current = e.clientX - xShift;
        if (current < 0) current = 0;
        else if (current > max) current = max;
        thumb.style.left = current + 'px';
        img.style.left = -current / max * maxScroll + 'px';
        price.innerHTML = '0' + (current / max * maxPrice + 1).toFixed(0) + '/';
        if (innerWidth >= '764' & innerWidth <= '1439') {
          
          price.textContent = "0" + (current / max * maxPrice + 2).toFixed(0) + "/";
        } else if (innerWidth > '1439') {

          price.textContent = "0" + (current / max * maxPrice + 1).toFixed(0) + "/";
        }
      };
      document.onmouseup = function (e) {
        document.onmousemove = document.onmouseup = '';
      };
    };


    if (innerWidth < '764') {

      price.textContent = '01/';

    } else if (innerWidth >= '764' & innerWidth <= '1439') {

      price.textContent = '02/';
      divider.textContent = '4';
      maxPrice = 2;

    } else {
      price.textContent = '01/';
      divider.textContent = '12';
      maxPrice = 11;
    }
  }

  showText();

  window.addEventListener('resize', function () {
    showText();
  });
})();