import PNG from "../modules/imageify"
let pngify = await PNG("input.txt");
await Bun.write("output.png",pngify)