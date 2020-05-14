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
        var menu_option = document.getElementById("menu_option")
        menu_option.style.visibility = "initial";
        menu_option.style.display = "block";

        var thumbnail_col1 = document.getElementsByClassName("thumbnail-col1")[0]
        thumbnail_col1.style.width = "33%";

        var thumbnail_col2 = document.getElementsByClassName("thumbnail-col2")
        thumbnail_col2.style.width = "33%";
    }
}

function CSSfunction_mobile(b){
    if (b.matches) {
        var thumbnail_col1 = document.getElementsByClassName("thumbnail-col1")[0]
        thumbnail_col1.style.width = "100%";

        var thumbnail_col2 = document.getElementsByClassName("thumbnail-col2")
        thumbnail_col2.style.width = "100%";
    }
}

var res_state = window.matchMedia("(min-width: 1000px)")
var res_state_mobile = window.matchMedia("(max-width: 999px)")
CSSfunction(res_state)
CSSfunction_mobile(res_state_mobile)
res_state.addListener(CSSfunction)
res_state_mobile.addListener(CSSfunction_mobile)