

$(document).ready(function() {
    $(".projects .container .browse h4").click(function () {
        $(".projects .container .browse h4").removeClass("active");
        $(this).addClass("active");   
    });
    var mixer = mixitup('#container', {
        controls: {
            toggleDefault: 'none'
        }
    });
    });
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//typed.js
var typed3 = new Typed('#typed3', {
  strings: ['<p>WE ARE SPECIALISTS IN</p> with','<p>WE ARE SPECIALISTS IN</p>', '<p>WE ARE SPECIALISTS IN</p>'],
  typeSpeed: 50,
  backSpeed: 40,
 smartBackspace: true, // this is a default
  loop: true
});
var typed4 = new Typed('#typed4', {
  strings: ['<p>WORK OF EXCELLENCE</p> with','<p>WORK OF EXCELLENCE</p>', '<p>WORK OF EXCELLENCE</p>'],
  typeSpeed: 50,
  backSpeed: 40,
 smartBackspace: true, // this is a default
  loop: true
});
var typed5 = new Typed('#typed5', {
  strings: ['<p>WORK OF EXCELLENCE</p> with','<p>WORK OF EXCELLENCE</p>', '<p>WORK OF EXCELLENCE</p>'],
  typeSpeed: 50,
  backSpeed: 40,
 smartBackspace: true, // this is a default
  loop: true
});
  
