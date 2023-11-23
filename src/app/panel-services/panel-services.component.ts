import { Component, OnInit } from '@angular/core';
import { SelectedServiceService } from '../services/selected-service.service'; // Importa el servicio

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
      autor: 'Usuario Actual', 
      fecha: new Date(),
      texto: commentText
    };

 
    this.comments.push(nuevoComentario);
  }
}


interface Comentario {
  autor: string;
  fecha: Date;
  texto: string;
}


