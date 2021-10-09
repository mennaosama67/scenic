window.addEventListener("scroll",function(){
    let h= document.querySelector("nav");
    let windowPosition=window.scrollY>0;
    h.classList.toggle("scrolling-active",windowPosition);
})
$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
   
        autoPlay: 3000, //Set AutoPlay to 3 seconds
   
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
   
    });
   
  });