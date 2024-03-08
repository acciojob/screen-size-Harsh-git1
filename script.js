//your JS code here. If required.
let con = document.getElementById("hw");
updateCon();

window.addEventListener("resize", function() {
    updateCon();
});

function updateCon() {
    con.innerHTML = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
}