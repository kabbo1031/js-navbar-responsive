const btn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

btn.addEventListener('click', ()=>{
  menu.style.display =
    menu.style.display === 'flex' ? 'none' : 'flex';
});
