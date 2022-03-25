$(document).ready(function () {
  let text;
  let image;
  $(".box").hover(
    function () {
      text = this.getElementsByClassName("text")[0];
      image = this.getElementsByClassName("image")[0];

      imgBoxCSS(image, 10);
      textBoxCSS(text, 10);
    },
    function () {
      imgBoxCSS(image, 50);
      textBoxCSS(text, 20);
    }
  );

  function imgBoxCSS(point, hight) {
    $(point).css({
      top: `${hight}px`,
      transition: "all .3s ease",
    });
  }
  function textBoxCSS(point, hight) {
    $(point).css({
      bottom: `${hight}px`,
      transition: "all .3s ease",
    });
  }
});
