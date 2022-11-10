import "./styles.css";

const progressBar = document.querySelector(".scroll-bar");
window.onscroll = function () {
  // The Element.scrollTop property gets or sets the number of pixels that an element's content is scrolled vertically.
  // using body. || documentElement. because some browsers dont support body
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  console.log(
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight
  );
  //scrollHeight ->total height of the element(here it is document)
  //clientHeight->height of the element which is visible
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  progressBar.style.width = `${scrolled}%`;
};
