(function(){
  const slides=document.getElementById('slides');
  const total=slides.children.length;
  let idx=0;
  function show(i){slides.style.transform=`translateX(-${i*100}%)`}
  function next(){idx=(idx+1)%total;show(idx)}
  let timer=setInterval(next,4000);
  slides.addEventListener('mouseenter',()=>clearInterval(timer));
  slides.addEventListener('mouseleave',()=>timer=setInterval(next,4000));
  const btn=document.getElementById('mobileMenuBtn');
  const nav=document.getElementById('navList');
  btn.addEventListener('click',()=>{
    const expanded=btn.getAttribute('aria-expanded')==='true';
    btn.setAttribute('aria-expanded',!expanded);
    nav.style.display=expanded?'flex':'block';
  });
})();
