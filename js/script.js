document.addEventListener('scroll', function()

    {
        var navBar = document.getElementsByTagName('header')[0];
        var whenSticky = navBar.offsetTop + 0.000000001;
        becomeSticky(whenSticky, navBar);

    });


function becomeSticky(whenSticky, navBar) {
    if (window.pageYOffset >= whenSticky) {
        navBar.classList.add("sticky");
    } else {
        navBar.classList.remove("sticky");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#hamburger").addEventListener("click", function() {
        document.querySelector("#nav-hamburger").classList.toggle("invisible");
        document.querySelector("#hamburger").classList.toggle("hamburger-hover");
        document.querySelector("#hamburger").classList.toggle("hamburger_active");
        document.querySelector("#nav-hamburger div").classList.toggle("growe");
        document.querySelector("#nav-hamburger div div").classList.toggle("make-visiblee");
    });
});