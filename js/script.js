document.addEventListener('DOMContentLoaded', function(){
  var href = document.location.href;
  var page = href.substr(href.lastIndexOf('/') + 1);
  console.log(page); 
  if (page==="index.html") {
    new Cocoen();
  };
  if (page==="shop.html") {


    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("cactive");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
} 
      
    }
});

/*pleaserotate.js by Rob Scanlon, MIT license. http://github.com/arscan/pleaserotate.js*/
!function(){function a(a){var b;for(var b in a)o[b]=a[b]}function b(a){document.documentElement&&(document.documentElement.className=document.documentElement.className.replace(/(?:^|\s)pleaserotate-\S*/g,""),document.documentElement.className+=" pleaserotate-"+a)}function c(a){var b;for(b=0;b<p.length;b++)a.insertRule(p[b],0);for(a.insertRule("#pleaserotate-backdrop { z-index: "+o.zIndex+"}",0),o.allowClickBypass&&a.insertRule("#pleaserotate-backdrop { cursor: pointer }",0),o.forcePortrait&&a.insertRule("#pleaserotate-backdrop { -webkit-transform-origin: 50% }",0),b=0;b<q.length;b++)CSSRule.WEBKIT_KEYFRAMES_RULE?a.insertRule("@-webkit-keyframes "+q[b],0):CSSRule.MOZ_KEYFRAMES_RULE?a.insertRule("@-moz-keyframes "+q[b],0):CSSRule.KEYFRAMES_RULE&&a.insertRule("@keyframes "+q[b],0)}function d(){var a=document.createElement("style");a.appendChild(document.createTextNode("")),document.head.insertBefore(a,document.head.firstChild),c(a.sheet)}function e(){var a=document.createElement("div"),b=document.createElement("div"),c=document.createElement("div"),d=document.createElement("small");a.setAttribute("id","pleaserotate-backdrop"),b.setAttribute("id","pleaserotate-container"),c.setAttribute("id","pleaserotate-message"),a.appendChild(b),b.appendChild(null!==o.iconNode?o.iconNode:f()),b.appendChild(c),c.appendChild(document.createTextNode(o.message)),d.appendChild(document.createTextNode(o.subMessage)),c.appendChild(d),document.body.appendChild(a)}function f(){var a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),a.setAttribute("id","pleaserotate-graphic"),a.setAttribute("viewBox","0 0 250 250");var b=document.createElementNS("http://www.w3.org/2000/svg","g");b.setAttribute("id","pleaserotate-graphic-path"),o.forcePortrait&&b.setAttribute("transform","rotate(-90 125 125)");var c=document.createElementNS("http://www.w3.org/2000/svg","path");return c.setAttribute("d","M190.5,221.3c0,8.3-6.8,15-15,15H80.2c-8.3,0-15-6.8-15-15V28.7c0-8.3,6.8-15,15-15h95.3c8.3,0,15,6.8,15,15V221.3zM74.4,33.5l-0.1,139.2c0,8.3,0,17.9,0,21.5c0,3.6,0,6.9,0,7.3c0,0.5,0.2,0.8,0.4,0.8s7.2,0,15.4,0h75.6c8.3,0,15.1,0,15.2,0s0.2-6.8,0.2-15V33.5c0-2.6-1-5-2.6-6.5c-1.3-1.3-3-2.1-4.9-2.1H81.9c-2.7,0-5,1.6-6.3,4C74.9,30.2,74.4,31.8,74.4,33.5zM127.7,207c-5.4,0-9.8,5.1-9.8,11.3s4.4,11.3,9.8,11.3s9.8-5.1,9.8-11.3S133.2,207,127.7,207z"),a.appendChild(b),b.appendChild(c),a}function g(a){var b=document.getElementById("pleaserotate-backdrop");a?b&&(b.style.display="block"):b&&(b.style.display="none")}function h(){var a,c=l&&!o.forcePortrait||!l&&o.forcePortrait;c?(a=o.onShow(),b("showing")):(a=o.onHide(),b("hiding")),(void 0===a||a)&&(k.Showing=c,g(c))}function i(){return window.innerWidth<window.innerHeight}function j(){return!m&&o.onlyMobile?void(n||(n=!0,g(!1),b("hiding"),o.onHide())):void(l!==i()&&(l=i(),h()))}var k={},l=null,m=/Android|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent),n=!1,o={startOnPageLoad:!0,onHide:function(){},onShow:function(){},forcePortrait:!1,message:"Please Rotate Your Device",subMessage:"(or click to continue)",allowClickBypass:!0,onlyMobile:!0,zIndex:1e3,iconNode:null},p=["#pleaserotate-graphic { margin-left: 50px; width: 200px; animation: pleaserotateframes ease 2s; animation-iteration-count: infinite; transform-origin: 50% 50%; -webkit-animation: pleaserotateframes ease 2s; -webkit-animation-iteration-count: infinite; -webkit-transform-origin: 50% 50%; -moz-animation: pleaserotateframes ease 2s; -moz-animation-iteration-count: infinite; -moz-transform-origin: 50% 50%; -ms-animation: pleaserotateframes ease 2s; -ms-animation-iteration-count: infinite; -ms-transform-origin: 50% 50%; }","#pleaserotate-backdrop { background-color: white; top: 0; left: 0; position: fixed; width: 100%; height: 100%; }","#pleaserotate-container { width: 300px; position: absolute; top: 50%; left: 50%; margin-right: -50%; transform: translate(-50%, -50%); -webkit-transform: translate(-50%, -50%); }","#pleaserotate-message { margin-top: 20px; font-size: 1.3em; text-align: center; font-family: Verdana, Geneva, sans-serif; text-transform: uppercase }","#pleaserotate-message small { opacity: .5; display: block; font-size: .6em}"],q=["pleaserotateframes{ 0% { transform:  rotate(0deg) ; -moz-transform:  rotate(0deg) ;-webkit-transform:  rotate(0deg) ;-ms-transform:  rotate(0deg) ;} 49% { transform:  rotate(-90deg) ;-moz-transform:  rotate(-90deg) ;-webkit-transform:  rotate(-90deg) ; -ms-transform:  rotate(-90deg) ;  } 100% { transform:  rotate(-90deg) ;-moz-transform:  rotate(-90deg) ;-webkit-transform:  rotate(-90deg) ; -ms-transform:  rotate(-90deg) ;  } }"];k.start=function(c){return document.body?(c&&a(c),d(),e(),j(),window.addEventListener("resize",j,!1),void(o.allowClickBypass&&document.getElementById("pleaserotate-backdrop").addEventListener("click",function(){var a=o.onHide();b("hiding"),k.Showing=!1,(void 0===a||a)&&g(!1)}))):void window.addEventListener("load",k.start.bind(null,c),!1)},k.stop=function(){window.removeEventListener("resize",onWindowResize,!1)},k.onShow=function(a){o.onShow=a,n&&(n=!1,l=null,j())},k.onHide=function(a){o.onHide=a,n&&(l=null,n=!1,j())},k.Showing=!1,"function"==typeof define&&define.amd?(b("initialized"),define(["PleaseRotate"],function(){return k})):"object"==typeof exports?(b("initialized"),module.exports=k):(b("initialized"),window.PleaseRotate=k,a(window.PleaseRotateOptions),o.startOnPageLoad&&k.start())}();

window.addEventListener('scroll', function(){scroll()}, true)


function navbar() {
  var x = document.getElementById("navbar");
  if (x.className === "icon-bar") {
      x.className += " responsive";
  } else {
      x.className = "icon-bar";
  }
}

function scroll() {
  var navbar = document.getElementById("navbar");
  var pos = navbar.getBoundingClientRect();
  var MBtn = document.getElementById("MBtn");
  console.log(pos);
  if (
    pos.top >= 0 &&
    pos.left >= 0 &&
    pos.right <= (window.innerWidth || document.documentElement.clientWidth) &&
    pos.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  ) {
    MBtn.style.display = "none";
  } else {
    MBtn.style.display = "block";
  }  
};

function bottom() {
  window.scrollTo(0,document.body.scrollHeight);
}
function jscolor1(picker) {
  // 'jscolor' instance can be used as a string
  document.getElementById('spray').setAttribute('fill', "#"+ picker.toString())
}
function jscolor2(picker) {
  // 'jscolor' instance can be used as a string
  document.getElementById('spray2').setAttribute('fill', "#"+ picker.toString())
}

window.addEventListener('load', function(){
  var loader = document.getElementById("wrapper");
  loader.style.display = "none";

});
