const navLinks = document.querySelector('#navLinks');
const allLinks = document.querySelectorAll('.nl-links li a');
const lowerLink = document.querySelector('.nl-links');

const menu = document.querySelector('.hamburger-menu');
const menuBars = document.querySelector('.hm-bars');
const menuXmark = document.querySelector('.hm-xmark');

// border styling for active page

if (window.innerWidth > 995) {
   allLinks[0].classList.add('active');
}

navLinks.addEventListener('click', (e) => {
   if (e.target.tagName === 'A') {
      allLinks.forEach(link => {
         link.classList.remove('active'); 
      })

      e.target.classList.add('active'); 
   }
});

// Toggling show class for hamburger menu

menu.addEventListener('click', () => {
   menuBars.classList.toggle('show');
   menuXmark.classList.toggle('show');
   lowerLink.classList.toggle('open')
});