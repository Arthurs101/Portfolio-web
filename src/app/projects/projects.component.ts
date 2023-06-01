import { Component } from '@angular/core';
import { SlideInterface } from '../imageSlider/types/slide.interface';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  slides: SlideInterface[] = [
    { url: '/assets/ASUKA.png', title: 'Asuka Drawing' , text: 'Dibujo de Asuka Langley realizado en css' , _url:'https://web-design-28b36.web.app/css/' },
    { url: '/assets/MedicData.png', title: 'MedikData', text: 'App web para manejo de centros médicos. Python Flask empleado, CSS y HTML ' , _url:'https://clinic-proyect.herokuapp.com/' },
    { url: '/assets/MemoryGame.png', title: 'MemoryGame', text: 'Juego de memoria realizado en react y webpack' , _url:'https://web-design-28b36.web.app/memory/' },
    { url: '/assets/MessiPage.png', title: 'not the MessiPage' , text: 'replica de la página oficial de messi: Webpack y React' , _url:'https://web-design-28b36.web.app/messipage/'},
  ];
}
