// Banner change
var banner = document.getElementById("banner");
var bc = banner.children;
var b = 0;

setInterval(br,5000);

function br(){
    bc[b].classList.remove("active");
    if(b<bc.length - 1){
        b++;
        bc[b].classList.add("active");
    }
    else{
        b = 0;
        bc[b].classList.add("active");
    }
}

var bs = document.querySelectorAll("#banner_spot > div");
for(var i = 0;i<bs.length;i++){
    bs[i].addEventListener("click",function(){
        var bn = this.getAttribute("data-n");
        var active = document.getElementsByClassName("active")[0];
        active.classList.remove("active");
        bc[bn].classList.add("active");
        b = bn;
    })
}

// menu bar open
var ham = document.getElementById("ham");
var panel = document.getElementById("nav-panel")

ham.addEventListener("click",function(e){
    panel.classList.toggle("n-o");
    e.stopPropagation();
})
var section = document.getElementsByTagName("section")[0];
var container = document.querySelector(".container");

section.addEventListener("click",function(){
    if(panel.classList.contains("n-o")){
        panel.classList.remove("n-o");
    }
})
container.addEventListener("click",function(){
    if(panel.classList.contains("n-o")){
        panel.classList.remove("n-o");
    }
})
