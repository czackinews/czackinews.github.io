// JavaScript source code
function myFunction() {
    var x = document.getElementById("menu_option");
    //if (x.style.visibility == "initial") {
    if (x.style.display === "block") {
        //x.style.display = "none";
        //x.style.visibility = "hidden";
        x.style.display = "none";
    } else {
        //x.style.visibility = "initial";
        x.style.display = "block";
    }

}

function plshelp(a) {
    if(a.matches) {
        var x = document.getElementById("menu_option");
        x.style.display = "block";
    }
}


function CSSfunction(a){
    if(a.matches) {
        var x = document.getElementById("menu_option");
        
        if (x.style.display === "none") {
            alert("siet");
            x.style.display = "block";
        }
        

        //menu_option.style.visibility = "initial";

        //var thumbnail_photo = document.getElementsByClassName("thumbnail_photo")[0]
        //thumbnail_photo.style.width = "100%";
        //thumbnail_photo.style.float = "auto";
        //var thumbnail_title = document.getElementsByClassName("thumbnail_title")[0]
        //thumbnail_title.style.float = "auto";

        var thumbnail_col1 = document.getElementsByClassName("thumbnail-col1")[0]
        thumbnail_col1.style.width = "33%";
        var thumbnail_col1 = document.getElementsByClassName("thumbnail-col1")[1]
        thumbnail_col1.style.width = "33%";
        var thumbnail_col1 = document.getElementsByClassName("thumbnail-col1")[2]
        thumbnail_col1.style.width = "33%";

        var thumbnail_col2 = document.getElementsByClassName("thumbnail-col2")[0]
        thumbnail_col2.style.width = "33%";
        var thumbnail_col2 = document.getElementsByClassName("thumbnail-col2")[1]
        thumbnail_col2.style.width = "33%";
        var thumbnail_col2 = document.getElementsByClassName("thumbnail-col2")[2]
        thumbnail_col2.style.width = "33%";
        
        var thumbnail_col3 = document.getElementsByClassName("thumbnail-col3")[0]
        thumbnail_col3.style.width = "33%";
        var thumbnail_col3 = document.getElementsByClassName("thumbnail-col3")[1]
        thumbnail_col3.style.width = "33%";
        var thumbnail_col3 = document.getElementsByClassName("thumbnail-col3")[2]
        thumbnail_col3.style.width = "33%";
    }
}

function CSSfunction_mobile(b){
    if (b.matches) {
        
        //var thumbnail_photo = document.getElementsByClassName("thumbnail_photo")[0]
        //thumbnail_photo.style.width = "50%";
        //thumbnail_photo.style.float = "left";
        //var thumbnail_title = document.getElementsByClassName("thumbnail_title")[0]
        //thumbnail_title.style.float = "right";
        
        var thumbnail_col1 = document.getElementsByClassName("thumbnail-col1")[0]
        thumbnail_col1.style.width = "100%";
        var thumbnail_photo = document.getElementsByClassName("thumbnail-col1")[0]
        thumbnail_col1.style.width = "100%";
        
        var thumbnail_col1 = document.getElementsByClassName("thumbnail-col1")[1]
        thumbnail_col1.style.width = "100%";
        var thumbnail_col1 = document.getElementsByClassName("thumbnail-col1")[2]
        thumbnail_col1.style.width = "100%";

        var thumbnail_col2 = document.getElementsByClassName("thumbnail-col2")[0]
        thumbnail_col2.style.width = "100%";
        var thumbnail_col2 = document.getElementsByClassName("thumbnail-col2")[1]
        thumbnail_col2.style.width = "100%";
        var thumbnail_col2 = document.getElementsByClassName("thumbnail-col2")[2]
        thumbnail_col2.style.width = "100%";
        
        var thumbnail_col3 = document.getElementsByClassName("thumbnail-col3")[0]
        thumbnail_col3.style.width = "100%";
        var thumbnail_col3 = document.getElementsByClassName("thumbnail-col3")[1]
        thumbnail_col3.style.width = "100%";
        var thumbnail_col3 = document.getElementsByClassName("thumbnail-col3")[2]
        thumbnail_col3.style.width = "100%";
    }
}

var res_state = window.matchMedia("(min-width: 1100px)")
//var res_state_mobile = window.matchMedia("(max-width: 999px)")
//CSSfunction(res_state)
//CSSfunction_mobile(res_state_mobile)
//res_state.addListener(CSSfunction)
//res_state_mobile.addListener(CSSfunction_mobile)

plshelp(res_state)
res_state.addListener(plshelp)
