function printarTela(){

    document.getElementById("canvas")?
    document.getElementById("show").removeChild(document.getElementById("canvas"))
    :

    html2canvas(document.getElementById("capture")).then(canvas => {
        document.getElementById("show").appendChild(canvas);
        document.getElementById("show").style.display = "none"
        canvas.setAttribute("id", "canvas");
    });
}
