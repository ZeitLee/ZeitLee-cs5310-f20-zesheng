const hexToRgb = (hex) => {
    let parseRgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    let rgb = {
        red: parseInt(parseRgb[1], 16),
        green: parseInt(parseRgb[2], 16),
        blue: parseInt(parseRgb[3], 16)
    }
    rgb.red /= 256
    rgb.green /= 256
    rgb.blue /= 256
    return rgb
}

const RED_HEX = "#FF0000"
const RED_RGB = hexToRgb(RED_HEX)
const BLUE_HEX = "#0000FF"
const BLUE_RGB = hexToRgb(BLUE_HEX)


const doMouseDown = (event) => {
    const boundingRectangle = canvas.getBoundingClientRect();
    const x = event.clientX - boundingRectangle.left;
    const y = event.clientY - boundingRectangle.top;
    const translation = {x, y}
    const shape = document.querySelector("input[name='shape']:checked").value
   
    addShape(translation, shape)
   }


   


