// Smooth scroll to offers section
document.addEventListener('DOMContentLoaded', function () {
  const heroButton = document.getElementById('hero-cta');
  const offersSection = document.getElementById('offers');

  if (heroButton && offersSection) {
    heroButton.addEventListener('click', function () {
      offersSection.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    });
  }
});
