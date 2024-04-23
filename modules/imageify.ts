
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
export default PNG;