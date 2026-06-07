const items = document.querySelectorAll(
  '.edge-grid article, .role, .stack-grid div, .edu-list article'
);

const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  {
    threshold: 0.12,
  }
);

items.forEach((el) => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(18px)';
  el.style.transition = 'opacity .55s ease, transform .55s ease';
  obs.observe(el);
});

const style = document.createElement('style');
style.textContent = '.show{opacity:1!important;transform:none!important}';
document.head.appendChild(style);
