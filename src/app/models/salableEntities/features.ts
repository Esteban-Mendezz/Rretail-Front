class Features{
    id: number;
    title: string;
    description: string;
    photo: Photo;
    product: Product;
    constructor(id: number, title: string, description: string, photo: Photo, product: Product){
        this.id = id;
        this.title = title;
        this.description = description;
        this.photo = photo;
        this.product = product;
    }
}
