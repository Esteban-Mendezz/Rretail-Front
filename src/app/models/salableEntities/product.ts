class Product{
    id: number;
    name: string;
    description: string;
    price: number;
    warranty: Warranty;
    status: boolean;
    features: Features[];
    subcategory: Subcategory;
    provider : Provider;
    rating: number;
    photos: Photo[];
    stock: number;
    id_salable: number;

    constructor(id: number, name: string, description: string, price: number, warranty: Warranty, status: boolean, features: Features[], subcategory: Subcategory, provider: Provider, rating: number, photos: Photo[], stock: number, id_salable: number){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.warranty = warranty;
        this.status = status;
        this.features = features;
        this.subcategory = subcategory;
        this.provider = provider;
        this.rating = rating;
        this.photos = photos;
        this.stock = stock;
        this.id_salable = id_salable;
    }
}
