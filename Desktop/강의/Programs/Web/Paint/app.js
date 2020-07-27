const canvas = document.querySelector(".canvas"),
    ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;
ctx.lineWidth = 2.5;

let mouse = false;

function onMouseMove(event)
{
    const x = event.offsetX,
        y = event.offsetY;

    if(!mouse)
    {
        ctx.beginPath();
        ctx.moveTo(x, y);
    }
    else
    {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function startPainting()
{
    mouse = true;
}

function stopPainting()
{
    mouse = false;
}

function init()
{
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

init()