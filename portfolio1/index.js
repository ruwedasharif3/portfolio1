const menuBtn = document.getElementById('hamburger');
const closeBtn = document.getElementById('cross');
const dropdown = document.getElementById('dropdown');

console.log(menuBtn, closeBtn, dropdown);  

menuBtn.addEventListener('click', () => {
  dropdown.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  dropdown.classList.remove('active');
});
