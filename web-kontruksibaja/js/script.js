// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburgermenu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};



// klik diluar side bar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})

// Fungsi untuk mengecek apakah elemen terlihat di viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Fungsi untuk mengecek apakah elemen terlihat di viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Fungsi untuk menambahkan kelas 'show' pada elemen yang terlihat
function handleScrollAnimation() {
  const serviceBoxes = document.querySelectorAll('.service-box');
  serviceBoxes.forEach((box) => {
    if (isElementInViewport(box)) {
      box.classList.add('show'); // Tambahkan kelas 'show' saat terlihat
    }
  });
}

// Event listener untuk scroll dan load
window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

