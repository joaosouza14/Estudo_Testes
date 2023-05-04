function selectMode(mode){

    var color = "ghostWhite";
    var label = "Light Mode";

    if (mode === "dark"){
        color = "rgb(24, 31, 41)";
        label = "Dark Mode";
    }
    else if (mode === "light"){
        color = "ghostWhite";
        label = "Light Mode";
    }
    else{
        color = "rgb(75, 73, 73)";
        label = "DarkLight Mode";
    }
    
    console.log(label);

    document.getElementById("theme").style.backgroundColor = color;
    document.getElementById("label").innerHTML = label;
}