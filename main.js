window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 150 ||
        document.documentElement.scrollTop > 150
    ) {
        document.getElementById("first-header").style.position = "fixed";
        document.getElementById("first-header").style.top = "0px";
        document.getElementById("first-header").style.left = "0px";
        document.getElementById("first-header").style.width = "100%";
        document.getElementById("first-header").style.zIndex = "99";
        document.getElementById("first-header").style.backgroundColor = "#fff";
        document.getElementById("first-header").style.boxShadow =
            "0px 2px 4px 0px rgba(0, 0, 0, 0.2)";
    } else {
        document.getElementById("first-header").style.backgroundColor =
            "transparent";
        document.getElementById("first-header").style.boxShadow = "none";
        document.getElementById("first-header").style.position = "relative";
    }
}
