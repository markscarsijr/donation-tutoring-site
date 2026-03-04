// Smooth scroll for nav links (already handled by CSS scroll-behavior,
// but this adds active state highlighting)

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function updateActiveNav() {
  const scrollY = window.scrollY + 80;
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });

// Stamp animation on pitch section
const stamp = document.querySelector('.pitch-stamp');
if (stamp) {
  let stamped = false;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !stamped) {
        stamped = true;
        stamp.classList.add('stamp-animate');
      }
    });
  }, { threshold: 0.5 });
  observer.observe(stamp);
}

// Nav shrink on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.classList.add('nav-scrolled');
  } else {
    nav.classList.remove('nav-scrolled');
  }
}, { passive: true });

// Taskbar clock
function updateClock() {
  const clock = document.getElementById('footer-clock');
  if (!clock) return;
  const now = new Date();
  let h = now.getHours();
  const m = String(now.getMinutes()).padStart(2, '0');
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  clock.textContent = `${h}:${m} ${ampm}`;
}
updateClock();
setInterval(updateClock, 30000);
