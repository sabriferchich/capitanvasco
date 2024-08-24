//function openNav(){
  //  document.getElementById("mobile-nav").style.display = "none";
    /*document.getElementById("menu-items").style.width = "100%";
};
function closeNav(){
    document.getElementById("menu-items").style.width = "0";

    if (window.matchMedia('screen and (max-width: 48.62rem)').matches) {document.getElementById("mobile-nav").style.display = "block";
    } else{
        document.getElementById("mobile-nav").style.display = "none";
    };
    *//* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-50px";
      }
      prevScrollpos = currentScrollPos;
    }
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
          entry.target.classList.add('show')
        } else{
          entry.target.classList.remove('show')
        }
      });
    
    });
    
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el)=> observer.observe(el))