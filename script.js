
var referenceHeight = document.querySelector('.jumbotron').offsetHeight;
document.getElementsByTagName('body')[0].onscroll = function(){
    let scrollTop = document.querySelector('.new-search-form').getBoundingClientRect().top

    if(scrollTop < 7)
    {
        document.querySelector('.search-form-container.container').classList.add('static');
    }

    if(document.getElementsByTagName('html')[0].scrollTop < referenceHeight+50)
    {
        document.querySelector('.search-form-container.container').classList.remove('static');

    }
}




    $(".navbar-toggle").on("click", function() {
        $(".new-navbar-mobile").toggleClass("open");
        $("body").toggleClass("body-overflow-hidden");
        $(".navbar-toggle").toggleClass("open");
    });


    document.querySelector(".new-navbar-mobile").addEventListener("click", function(e){
        if (e.target.classList.contains("new-navbar-mobile")) {
            $(".new-navbar-mobile").removeClass("open");
            $("body").removeClass("body-overflow-hidden");
            $(".navbar-toggle").removeClass("open");
        }
    });





const hambuger = document.querySelector('.hambuger');
const navmenu = document.querySelector('.nav-menu');

hambuger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hambuger.classList.toggle("active");
    navmenu.classList.toggle("active");
}

const navlink = document.querySelectorAll('.nav-link');
navlink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
    hambuger.classList.remove("active");
    navmenu.classList.remove("active");
}






const form = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const searchQuery = searchInput.value;
  window.location.href = 'https://hotels.ng/hotels-in-' + searchQuery;
  searchInput.value = "";
});
