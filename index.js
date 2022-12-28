// Import stylesheets
import './style.scss';

$(document).ready(function () {
  var box = $('.box'),
    orginal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    temp = orginal,
    x = [],
    img = 0;

  $('.me').css({ background: 'black' });

  randomTile(4);
  changeBG();

  function randomTile(column) {
    var i;
    for (i = orginal.length - 1; i >= 0; i--) {
      var flag = getRandom(0, i);
      x[i] = temp[flag];
      temp[flag] = temp[i];
      temp[i] = x[i];
    }
    for (i = 0; i < orginal.length; i++) {
      box.append(
        '<div  class="me me_' + x[i] + ' tile" data-bid="' + x[i] + '"></div>'
      );
      if ((i + 1) % column == 0) box.append('<br>');
    }
    i = 12;
    return 0;
  }

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function changeBG() {
    $('.me').css({
      background: 'black',
    });
  }

  function resize() {
    var i;
    var imgHeight = document.querySelector('.pic img').offsetHeight + 15;
    var imgWidth = document.querySelector('.pic img').offsetWidth;
    console.log(imgHeight, imgWidth);
    console.log(document.getElementsByClassName('tile'));
    for (i = 0; i < orginal.length; i++) {
      document.getElementsByClassName('tile')[i].style.height =
        imgHeight / 3 + 'px';
      document.getElementsByClassName('tile')[i].style.width =
        imgWidth / 4 + 'px';
    }
  }
  resize();
  window.onresize = function () {
    resize();
  };

  // console.log(document.querySelectorAll('div[data-bid]'));
  // var i = 0;
  // (function loop() {
  //   document.querySelector(`div[data-bid='${i}']`).style.background =
  //     'transparent';
  //   //   document.querySelector(`div[data-bid='${i}']`).style.border = 'transparent';
  //   document.querySelector(`div[data-bid='${i}']`).style.boxShadow = 'none';
  //   if (++i < orginal.length) {
  //     setTimeout(loop, 2000);
  //   }
  // })();
});
