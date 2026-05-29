window.onload = function () {

    let lastScroll = 0;

    const navbar = document.querySelector(".Heading");

    window.addEventListener("scroll", () => {

        let currentScroll = window.pageYOffset;

        if(currentScroll > lastScroll){
            navbar.style.top = "-130px";
        }
        else{
            navbar.style.top = "0";
        }

        lastScroll = currentScroll;

    });

    /* MOBILE MENU */

    const menu = document.getElementById("menu");
    const nav = document.querySelector(".Contents");

    menu.addEventListener("click", () => {

        nav.classList.toggle("active");

        if(nav.classList.contains("active")){
            menu.innerHTML = "✕";
        }
        else{
            menu.innerHTML = "☰";
        }

    });

};