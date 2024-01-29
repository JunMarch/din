document.addEventListener('DOMContentLoaded', function () {
  const observedSections = document.querySelectorAll('[data-lazyLoad]');
  const shouldInitiallyHide = true; // Set this variable based on your condition
  const nav_icon = document.querySelector('.bi-list');
  const nav = document.querySelector('.nav-wrapper');
  document.body.addEventListener('scroll',function(){
    if(window.scrollY > '0px'){
      nav.style.position = 'fixed';
      nav.style.top = '20px';
      nav.style.left = '0px';
      nav.style.zIndex = 1;
      nav.style.width = '100%';
      nav.style.display = 'flex';
      nav.style.justifyContent = 'space-between;'
    }else{
      nav.style.postion = 'relative'
    }
  })
  nav_icon.addEventListener('click',function(){
    document.querySelector('nav').classList.toggle('active')
  })
  
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        entry.target.classList.remove('hidden');
      } else {
        if (shouldInitiallyHide) {
          //entry.target.classList.add('hidden');
          entry.target.classList.remove('visible');
        }
      }
    });
  }, { threshold: 0.5 });

  observedSections.forEach(section => {
    // Initial setup based on the variable
    if (shouldInitiallyHide) {
      section.classList.add('hidden');
    }
    observer.observe(section);
  });
  
  
});
