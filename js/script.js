function elMenu(){

    var menu = document.querySelector(".menu");
    var open_menu = document.querySelector(".fa-bars");
    var close_menu = document.querySelector(".fa-times");

    document.querySelector(".options").addEventListener("click", ()=> {
            menu.classList.toggle("hide-mobile");
            open_menu.classList.toggle("hide-mobile")
            close_menu.classList.toggle("hide-mobile")    
    })
}

window.onload = function() {
    elMenu();
}