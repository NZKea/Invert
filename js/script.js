document.addEventListener('DOMContentLoaded', function(){
  new Cocoen();
  ImageMap('img[usemap]')
});

function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "icon-bar") {
      x.className += " responsive";
  } else {
      x.className = "icon-bar";
  }
}
