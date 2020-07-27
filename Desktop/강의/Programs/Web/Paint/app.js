const canvas = document.querySelector(".canvas"),
    ctx = canvas.getContext("2d"),
    setting = document.querySelector(".setting"),
    mode = document.querySelector(".mode"),
    save = document.querySelector(".save"),
    colors = Array.from(document.querySelectorAll(".control-color"));

let filling = false;

canvas.width = 500;
canvas.height = 500;
ctx.lineWidth = 2.5;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, 500, 500);

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

function changeColor(event)
{
    event.preventDefault();
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function brushSetting(event)
{
    console.log(event.target.value);
    ctx.lineWidth = event.target.value;
}

function handleModeClick()
{
    if(filling === true)
    {
        mode.innerText = "Fill";
        filling = false;
    }
    else
    {
        mode.innerText = "Paint";
        filling = true;
        ctx.fillStyle = ctx.strokeStyle;
    }
}

function Filling()
{
    if(filling === true)
    {
        ctx.fillRect(0, 0, 500, 500);
    }

}

function saveImage()
{
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "Save Paint";
    link.click();
}

function init()
{
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    setting.addEventListener("input", brushSetting);
    mode.addEventListener("click", handleModeClick);
    save.addEventListener("click", saveImage);
    canvas.addEventListener("click", Filling);
    colors.forEach(color => color.addEventListener("click", changeColor))
}

init()