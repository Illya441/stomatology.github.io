$(document).ready(function() {
    var headerHeight = $('header').outerHeight();// Target your header navigation here 
    $('.menu_link').click(function(e) {
        var linkHref = $(this).attr('href'); 
        
        console.log(headerHeight)
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight // Add it to the calculation here
        }, 800);
        e.preventDefault();
      });
    });
    //отвечает чтобы хедер уменьшался
    
    const header = document.querySelector('.header');
    const threshold = 20; // change this to adjust when the header starts to shrink
    let scrolled = 0;
    
    window.addEventListener('scroll', () => {
      scrolled = window.scrollY;
      if (scrolled > threshold) {
        header.classList.add('shrink');
      } else {
        header.classList.remove('shrink');
      }
    });
    
