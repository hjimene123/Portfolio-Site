$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });

// JavaScript for parallax effect
window.addEventListener('scroll', function () {
    const parallax = document.querySelector('.parallax');
    const scrollPosition = window.pageYOffset;
    parallax.style.backgroundPosition = 'center ' + (scrollPosition * 0.5) + 'px';
});
