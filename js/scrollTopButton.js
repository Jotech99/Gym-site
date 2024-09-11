//==================================> SCROLL TO TOP BUTTON <================================
//Scroll To Top Button
// Get the button:
const btnScrolltoTop = document.querySelector("#btnScrolltoTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function(){
    scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnScrolltoTop.style.display = "block";
  } else {
    btnScrolltoTop.style.display = "none";
  }
}
btnScrolltoTop.addEventListener("click", function(){	
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth"
		});
	});

 

