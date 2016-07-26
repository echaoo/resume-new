/**
 * Created by echao on 2016/7/19.
 */
$(document).ready(function () {
  $(function () {
    var speed = 0,
      $back = $('#back'),
      $middle1 = $('#middle-fir'),
      $middle2 = $('#middle-sec'),
      $middle3 = $('#middle-thi'),
      $middle4 = $('#middle-for'),
      $front = $('#front'),
      yPos = 0,
      $win = $(window);

    $(document).mousemove(function (e) {
      var halfWidth = $win.height() / 2;

      speed = e.pageY - halfWidth;
      speed /= halfWidth;
    });

    $(document).mouseout(function (e) {
      speed = 0;
    });

    setInterval(function () {
      $back.css({
        backgroundPosition: '0px ' + yPos + 'px'
      });
      $middle1.css({
        backgroundPosition: '0px ' + (yPos * (1.6)) + 'px'
      });
      $middle2.css({
        backgroundPosition: '0px ' + (yPos * (2.2)) + 'px'
      });
      $middle3.css({
        backgroundPosition: '0px ' + (yPos * (2.8)) + 'px'
      });
      $middle4.css({
        backgroundPosition: '0px ' + (yPos * 3.4) + 'px'
      });
      $front.css({
        backgroundPosition: '0px ' + (yPos * 4) + 'px'
      });
      yPos += speed;
    }, 30);
  });
});
