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

      // Track hero CTA click
      if (typeof gtag !== 'undefined') {
        gtag('event', 'hero_cta_click', {
          'event_category': 'engagement',
          'event_label': 'Hero CTA Button'
        });
      } else {
        console.warn('gtag is not defined');
      }
    });
  }

  // Track offer clicks
  const offerButtons = document.querySelectorAll('[aria-label*="En savoir plus sur l\'offre"]');
  offerButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      const offerName = this.getAttribute('aria-label').match(/offre (.+)/)?.[1] || 'Unknown';

      if (typeof gtag !== 'undefined') {
        gtag('event', 'offer_click', {
          'event_category': 'offers',
          'event_label': offerName,
          'value': offerName
        });
      } else {
        console.warn('gtag is not defined');
      }
    });
  });

  // Track Instagram link click
  const instagramLink = document.querySelector('[href*="instagram.com/moovabb"]');
  if (instagramLink) {
    instagramLink.addEventListener('click', function () {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'instagram_follow_click', {
          'event_category': 'social',
          'event_label': 'Instagram Follow Button'
        });
      } else {
        console.warn('gtag is not defined');
      }
    });
  }

  // Track UTM parameters from marketing campaigns
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get('utm_source');
  const utmMedium = urlParams.get('utm_medium');
  const utmCampaign = urlParams.get('utm_campaign');

  if (utmSource || utmMedium || utmCampaign) {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'campaign_visit', {
        'event_category': 'marketing',
        'utm_source': utmSource,
        'utm_medium': utmMedium,
        'utm_campaign': utmCampaign
      });
    } else {
      console.warn('gtag is not defined');
    }
  }
});
