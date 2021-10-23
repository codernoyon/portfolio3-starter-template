var sideNavBar = document.querySelector(".nav");
var mobileMenuBars = document.querySelector(".mobilemenu_bars");

sideNavBar.style.left = "-300px";

mobileMenuBars.onclick = function comeOut() {
    if (sideNavBar.style.left == "-300px") {
        sideNavBar.style.left = "0px";
    } else {
        sideNavBar.style.left = "-300px"
    }
}

