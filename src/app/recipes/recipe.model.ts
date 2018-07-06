export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, desc: string, imgPath: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imgPath;
    }
    /* Constructor: "So we can instantiate with the "new" keyword and pass the arguments right to the constructor." */
}