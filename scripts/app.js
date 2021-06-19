document.getElementById('backBT').style.display = "none"; // hides back button on page load
document.getElementById('info').style.display = "none"; // hides zoomed in images on page load

// called when a planet is selected, all planets are hidden except for selected one which is zoomed in
function hide(el) {
    document.getElementById('solar').style.display = "none";
    document.getElementById('backBT').style.display = "block";    

}

// called when back button is pressed, all planets are shown again and back button is hidden
function show() {
    document.getElementById('solar').style.display = "block";
    document.getElementById('backBT').style.display = "none";
}