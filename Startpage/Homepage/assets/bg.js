function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function onHover()
{
    selected_background = getRandomInt(1, 61);
    document.getElementById("backgroundf").src = "bg/x.jpg".replace("x",selected_background);
}

function offHover()
{
    selected_background = getRandomInt(1, 61);
    document.getElementById("backgroundb").src = "bg/x.jpg".replace("x",selected_background);
}

selected_background = getRandomInt(1, 61)
document.getElementById("backgroundf").src = "bg/x.jpg".replace("x",selected_background)
