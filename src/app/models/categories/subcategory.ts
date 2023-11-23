class Subcatergory{
  id: number;
  name: string;
  description: string;
  photo: string;
  created_at: Date;
  updated_at: Date;
  category: Category;

  constructor(id: number, name: string, description: string, photo: string, created_at: Date, updated_at: Date, category: Category) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.photo = photo;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.category = category;
  }
}
