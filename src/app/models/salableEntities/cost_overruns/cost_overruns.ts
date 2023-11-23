class CostOverruns{
  id: number;
  description: string;
  price: number;
  photos: Photo[];
  id_salable: number;

  constructor(id: number, description: string, price: number, photos: Photo[], id_salable: number){
    this.id = id;
    this.description = description;
    this.price = price;
    this.photos = photos;
    this.id_salable = id_salable;
  }
}
