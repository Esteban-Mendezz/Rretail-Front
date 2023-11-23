class Customer{
  id: number;
  name: string;
  lastname: string;
  document_type: string;
  document_number: number;
  id_user: number;

  constructor(id: number, name: string, lastname: string, document_type: string, document_number: number, id_user: number){
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.document_type = document_type;
    this.document_number = document_number;
    this.id_user = id_user;
  }
}
