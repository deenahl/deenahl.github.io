// Hides navigations bar after scrolling some time 

function hideNavigation() {
    var nav = document.getElementById("horizontal-menu");
    
    var scrollAmount = window.pageYOffset;
    var elementVisible = 50;

    if (scrollAmount > elementVisible) {
        nav.classList.remove("active");
    } else {
        nav.classList.add("active");
    }
}

window.addEventListener("scroll", hideNavigation);