// Minimal IntersectionObserver for reveal animations
// Adds 'is-visible' class to elements with '.reveal' when they enter viewport

let observer: IntersectionObserver | null = null;

function initReveal() {
  // Avoid initializing multiple times
  if (observer) return;

  // Check for browser support
  if (!('IntersectionObserver' in window)) {
    // Fallback: immediately show all elements
    document.querySelectorAll('.reveal').forEach((el) => {
      el.classList.add('is-visible');
    });
    return;
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Optionally unobserve after revealing
          observer?.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  // Observe all elements with .reveal class
  document.querySelectorAll('.reveal').forEach((el) => {
    observer?.observe(el);
  });
}

// Initialize on DOM ready and on Astro page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReveal);
} else {
  initReveal();
}

// Support Astro view transitions
document.addEventListener('astro:page-load', initReveal);
