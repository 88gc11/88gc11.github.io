// 入口脚本：DOM 准备后绑定事件并打印信息
document.addEventListener('DOMContentLoaded', function(){
  console.log('88gc11 static site loaded');
  var navToggle = document.getElementById('navToggle');
  var siteNav = document.getElementById('siteNav');
  if(navToggle){
    navToggle.addEventListener('click', function(){
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      if(siteNav){
        siteNav.style.display = expanded ? 'none' : 'block';
      }
    });
  }
});
