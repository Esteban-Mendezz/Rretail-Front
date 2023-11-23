class Photo {
  id: number;
  photoName: string;
  photoData: Uint8Array; // Se asume que es un array de bytes

  constructor(id: number, photoName: string, photoData: Uint8Array) {
    this.id = id;
    this.photoName = photoName;
    this.photoData = photoData;
  }
}
