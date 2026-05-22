
const toggle=document.querySelector('.mobile-toggle');const menu=document.querySelector('.menu');
if(toggle){toggle.addEventListener('click',()=>menu.classList.toggle('open'))}
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const id=a.getAttribute('href');if(id.length>1&&document.querySelector(id)){e.preventDefault();document.querySelector(id).scrollIntoView({behavior:'smooth'});menu?.classList.remove('open')}}));
document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{const f=btn.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');document.querySelectorAll('.product-card[data-cat]').forEach(card=>{card.classList.toggle('hide', f!=='all' && card.dataset.cat!==f)})}));
