class Category{
  id: number;
  name: string;
  description: string;
  photo: string;
  created_at: Date;
  updated_at: Date;

  constructor(id: number, name: string, description: string, photo: string, created_at: Date, updated_at: Date) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.photo = photo;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

  toString(): string {
    return `Category: {id: ${this.id}, name: ${this.name}, description: ${this.description}, photo: ${this.photo}, created_at: ${this.created_at}, updated_at: ${this.updated_at}}`;
  }
}
