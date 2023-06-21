// JavaScript Document
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    // 向上滚动，显示导航栏
    document.querySelector('.navbar').classList.remove('hidden');
  } else {
    // 向下滚动，隐藏导航栏
    document.querySelector('.navbar').classList.add('hidden');
  }
  prevScrollpos = currentScrollPos;

  // 检查滚动位置是否在顶部，并根据需要固定导航栏
  if (window.pageYOffset === 0) {
    document.querySelector('.navbar').classList.add('fixed');
  } else {
    document.querySelector('.navbar').classList.remove('fixed');
  }
};
