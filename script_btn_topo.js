window.onscroll = function() {
  const btn = document.getElementById("btn-top");
  if (document.documentElement.scrollTop > 300) {
    btn.style.opacity = "1";
    btn.style.pointerEvents = "auto";
  } else {
    btn.style.opacity = "0";
    btn.style.pointerEvents = "none";
  }
};
