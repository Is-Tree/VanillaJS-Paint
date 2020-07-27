const canvas = document.querySelector(".canvas");

let mouse = false;

function onMouseMove(event)
{
    const x = event.offsetX,
        y = event.offsetY;
    console.log(event);
    console.log(x, y);
}

function onMouseDown(event)
{
    console.log(event);
    mouse = true;
}

function onMouseUp(event)
{
    console.log(event);
    mouse = false;
}

function onMouseLeave(event)
{
    console.log(event);
    mouse = false;
}

function init()
{
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mousedown", onMouseUp);
    canvas.addEventListener("mouseleave", onMouseLeave);
}

init()