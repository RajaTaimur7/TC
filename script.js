// Immediately hide the preloader on page load
window.addEventListener('load', function() {
    document.getElementById('preloader').style.display = 'none';
  });
  
  // Show the preloader on navigation
  document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.href !== window.location.href) {
      document.getElementById('preloader').style.display = 'flex'; // Use 'flex' to keep it centered
      // Optionally, prevent the default action if you want to show the loader for some time
      e.preventDefault();
      setTimeout(function() {
        window.location = e.target.href;
      }, 1000); // Adjust time as needed
    }
  });

  
//code for nav bar active

  document.addEventListener("DOMContentLoaded", function() {
    var currentLocation = window.location.href;
    var navLinks = document.querySelectorAll('.navbar-nav .nav-item .nav-link');
  
    navLinks.forEach(function(navLink) {
      // Check if the current page URL exactly matches the link's URL
      if (navLink.href === currentLocation) {
        navLink.parentElement.classList.add('active');
      } else {
        navLink.parentElement.classList.remove('active'); // Remove 'active' class if not on this page
      }
    });
  });