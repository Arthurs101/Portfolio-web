import { Component } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent {
  items = [
    {name: "javascript" ,image: '../../assets/techlogos/javascript.png'},
    {name: "angular", image:'../../assets/techlogos/angular.png'},
    {name: "firebase", image:'../../assets/techlogos/firebase.png'},
    {name: "react", image:'../../assets/techlogos/react.png'},
    {name: "supabase", image:'../../assets/techlogos/supabase.png'},
    {name: "python", image:'../../assets/techlogos/python.png'},
    {name: "webpack", image:'../../assets/techlogos/webpack.png'}

  ];
}
