
class User {
  id: number;
  username: string;
  email: string;
  password: string;
  cellphone: string;
  address: string;
  rol: Role;
  photo: Photo;
  state: string;
  createAt: Date;
  tipo_usuario: string;
  bills: Bill[];

  constructor(
    id: number,
    username: string,
    email: string,
    password: string,
    cellphone: string,
    address: string,
    rol: Role,
    photo: Photo,
    state: string,
    createAt: Date,
    bills: Bill[] = [],
    tipo_usuario: string
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.cellphone = cellphone;
    this.address = address;
    this.rol = rol;
    this.photo = photo;
    this.state = state;
    this.createAt = createAt;
    this.bills = bills;
    this.tipo_usuario = tipo_usuario;
  }

  toString(): string {
    return `${this.id} ${this.username} ${this.email} ${this.password} ${this.cellphone} ${this.address} ${this.rol} ${this.photo} ${this.state} ${this.createAt} ${this.bills} ${this.tipo_usuario}`;
  }
}
