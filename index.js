document.getElementsByClassName("collapsed")[0].onclick = function () {
    var nav = document.getElementsByClassName("nav-small")[0];
    if (nav.style.display == "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}
