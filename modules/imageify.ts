
import sharp from 'sharp';

async function PNG(fp: string): Promise<Buffer> {
    let datBlob:any = await Bun.file(fp);
    let dat = await datBlob.arrayBuffer()
    let readableDat = new Uint8Array(dat)
    console.log(dat.length)
    const pixels:number = Math.ceil(dat.byteLength / 3); 
    const imageSize:number = Math.ceil(Math.sqrt(pixels)); // Assume square image
    let imgBuf:Buffer = Buffer.alloc(imageSize * imageSize * 3); 
    console.log(dat[4])
    for (let i = 0; i < dat.byteLength; i++) {
        
        imgBuf[i % (pixels * 3)] = readableDat[i];
    }
    const image = sharp(imgBuf, {
        raw: {
            width: imageSize,
            height: imageSize,
            channels: 3
        }
    });

    // Convert to PNG and return as buffer
    return await image.png().toBuffer();
}
async function readPNG(fp: string): Promise<Buffer> {
    // Read the PNG image file
    const dat = Bun.file(fp);
    const datBuffer = await dat.arrayBuffer()
    const metadata = await sharp(datBuffer).metadata();
    const pixels = (metadata.width || 256) * (metadata.height || 256);
    const imgBuf = Buffer.alloc(pixels * 3);
    const { data } = await sharp(datBuffer).raw().toBuffer({ resolveWithObject: true });
    for (let i = 0; i < pixels; i++) {
        imgBuf[i * 3] = data[i * 4];     // Red
        imgBuf[i * 3 + 1] = data[i * 4 + 1]; // Green
        imgBuf[i * 3 + 2] = data[i * 4 + 2]; // Blue
    }

    // Return the image buffer
    return imgBuf;
}
export default {PNG,readPNG};