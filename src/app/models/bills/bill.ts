class Bill {
  id: number;
  descripcion: string;
  observacion: string;
  createAt: Date;
  user: User;
  items: BillItem[];

  constructor(id: number, descripcion: string, observacion: string, createAt: Date, user: User, items: BillItem[] = []) {
    this.id = id;
    this.descripcion = descripcion;
    this.observacion = observacion;
    this.createAt = createAt;
    this.user = user;
    this.items = items;
  }

  getTotal(): number {
    let total = 0.0;
    for (const item of this.items) {
      total += item.getTotal();
    }
    return total;
  }
}
