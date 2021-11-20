var button = document.querySelector(".scroll_btn");

function barFunc() {
  var scroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (scroll / height) * 100;
  document.querySelector(".progress-bar").style.width = scrolled + "%";
}

function scrollBtnFunc() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        button.style.display = "block";
    } 
    else {
        button.style.display = "none";
    }
}

function upFunc() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function() {
    scrollBtnFunc();
    barFunc();
};