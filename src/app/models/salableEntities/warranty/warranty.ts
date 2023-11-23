class Warranty{
  id: number;
  status: string;
  duration: number;
  issuedDate: Date;
  expirationDate: Date;

  constructor(id: number, status: string, duration: number, issuedDate: Date, expirationDate: Date) {
    this.id = id;
    this.status = status;
    this.duration = duration;
    this.issuedDate = issuedDate;
    this.expirationDate = expirationDate;
  }
}
