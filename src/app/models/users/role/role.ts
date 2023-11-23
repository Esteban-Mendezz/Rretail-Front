class Role {
  id: number;
  name: string;
  description: string;
  state: string;
  users: User[];

  constructor(id: number, name: string, description: string, state: string, users: User[] = []) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.state = state;
    this.users = users;
  }
}
