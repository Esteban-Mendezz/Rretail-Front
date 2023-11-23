import { Component, OnInit } from '@angular/core';
import { SelectedServiceService } from '../services/selected-service.service'; // Importa el servicio
export interface Comentario {
  id: number;
  authorImage: string;
  author: string;
  date: Date;
  text: string;
  // ... otras propiedades ...
}

@Component({
  selector: 'app-panel-services',
  templateUrl: './panel-services.component.html',
  styleUrls: ['./panel-services.component.css']
})
export class PanelServicesComponent implements OnInit {
  isCommentSectionEnabled = false;
  service: any = {}; 

  constructor(private selectedServiceService: SelectedServiceService) { }

  ngOnInit(): void {
  
    this.service = this.selectedServiceService.getSelectedService();
  }

comments: Comentario[] = [];

  submitComment(commentText: string) {
    const nuevoComentario: Comentario = {
      id: this.comments.length + 1, 
      authorImage: 'assets/images/profile-picture.jpg', 
      author: 'esteban mendez',
      date: new Date(),
      text: commentText,
      
    };

    this.comments.push(nuevoComentario);
  }
}


