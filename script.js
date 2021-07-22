function myfun(){
    var active = document.querySelectorAll(".active-element");
    for(var a=0; a<active.length; a++){
        active[a].classList.toggle("active");
    }
};