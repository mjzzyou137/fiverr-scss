
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".menuMain").style.backgroundColor = "white";
        document.querySelector(".hr").style.display = "block";
        document.querySelector(".join").style.borderColor ="#1DBF73";
        document.querySelector(".join-text").style.color ="#1DBF73";
    } else {
        document.querySelector(".menuMain").style.backgroundColor = "transparent";
        document.querySelector(".hr").style.display ="none";
        document.querySelector(".join").style.borderColor ="#555555";
        document.querySelector(".join-text").style.color ="#555555";
    }
    if(document.body.scrollTop > 160 || document.documentElement.scrollTop > 160){
        document.querySelector(".container-scroll").style.display = "flex";  
        document.querySelector(".form").style.display = "flex";
        document.querySelector(".hr2").style.display ="block";
    } else {
        document.querySelector(".container-scroll").style.display ="none";  
        document.querySelector(".form").style.display = "none";
        document.querySelector(".hr2").style.display ="none";
    }
}







// MENU

document.querySelector(".btn-menu").addEventListener("click", () => {
    document.querySelector(".container-menu-responsive").classList.toggle("open");
    document.querySelector(".menu-responsive").classList.toggle("open");
    document.querySelector(".container-menu-responsive").classList.toggle("open");
    document.querySelector(".container-opacity").classList.toggle("open");
    document.querySelector(".logo").classList.toggle("open");
    document.querySelector(".btnn").classList.toggle("open");
    document.querySelector(".join").classList.toggle("open");
    document.querySelector(".sign").classList.toggle("open");
    document.querySelector(".banner-content").classList.toggle("open");
});











