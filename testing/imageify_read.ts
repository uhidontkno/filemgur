import imageify from "../modules/imageify"

let pngify = await imageify.readPNG("output.png");
let datBlob = new Blob([pngify])
console.log(await datBlob.text())