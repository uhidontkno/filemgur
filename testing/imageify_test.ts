import imageify from "../modules/imageify"
let pngify = await imageify.PNG("input.txt");
await Bun.write("output.png",pngify)