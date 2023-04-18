class MImage {
    data: any;
    filename: string;
    format: string;

    constructor(data: any, filename: string, format: string) {
        this.data = data;
        this.filename = filename;
        this.format = format;
    }
    save(): string {
        console.log("Image being saved to AWS S3");
        return "http://thisissavedimageurl.com";
    }
}

class JPGConverter {
    convert(base64Image: string, filename: string): MImage {
        console.log("Converting image to jpg");
        const result = "resulting image in jpg format";
        return new MImage(result, filename, "jpg");
    }
}

class PNGConverter {
    convert(base64Image: string, filename: string): MImage {
        console.log("Converting image to png");
        const result = "resulting image in png format";
        return new MImage(result, filename, "png");
    }
}

class GIFConverter {
    convert(base64Image: string, filename: string): MImage {
        console.log("Converting image to gif");
        const result = "resulting image in gif format";
        return new MImage(result, filename, "gif");
    }
}

// This is facade. It hides the complexity of the system.
class ImageConverter {
    convert(base64Image:string, filename:string, format:string): MImage {
        let newImage: MImage;

        switch(format) {
            case "png":
                console.log("Converting image to png");
                newImage = new PNGConverter().convert(base64Image, filename);
                break;
            case "jpg":
                console.log("Converting image to jpg");
                newImage = new JPGConverter().convert(base64Image, filename);
                break;
            case "gif":
                console.log("Converting image to gif");
                newImage = new GIFConverter().convert(base64Image, filename);
                break;
            default:
                throw new Error("Unsupported format");
        }

        return newImage;
    }
}

class Application {
    main(): void {
        // base64 image
        const imageBase64: string = "data:image/png;base64,iVBORw0"
        const converter: ImageConverter = new ImageConverter()
        const image: MImage = converter.convert(imageBase64, "image", "png")
        const url : string = image.save()

        console.log(`Saved image url is ${url}`);
    }
}