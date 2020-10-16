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
const GREEN_HEX = "#00FF00"
const GREEN_RGB = hexToRgb(GREEN_HEX)


const doMouseDown = (event) => {
    const boundingRectangle = canvas.getBoundingClientRect();
    const x =  Math.round(event.clientX
                - boundingRectangle.left
                - boundingRectangle.width/2);
    const y = -Math.round(event.clientY
                - boundingRectangle.top
                - boundingRectangle.height/2);
    const translation = {x, y, z: -150}
    const rotation = {x: 0, y: 0, z: 180}
    const shapeType = document.querySelector("input[name='shape']:checked").value
    const shape = {
      translation, rotation, type: shapeType
    }
    addShape(shape, shapeType)
   }
   





