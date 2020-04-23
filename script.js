// JavaScript source code
function myFunction() {
    var x = document.getElementById("menu_option");
    if (x.style.visibility === "initial") {
        //x.style.display = "none";
        x.style.visibility = "hidden";
        x.style.display = "none";
    } else {
        x.style.visibility = "initial";
        x.style.display = "block";
    }
}


function CSSfunction(a){
    if(a.matches) {
    document.getElementById("menu_option").style.visibility = "initial";
    document.getElementById("menu_option").style.display = "block";
    }  
}

var res_state = window.matchMedia("(min-width: 1000px)")
CSSfunction(res_state)
res_state.addListener(CSSfunction)