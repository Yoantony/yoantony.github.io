const toggle = document.querySelector(".toggle")
const navmenu = document.querySelector(".nav-menu")
new Function();
function newFunction(){
    toggle.addEventListener("click", () => {
        navmenu.classList.toggle("nav-menvi");
    });
} 