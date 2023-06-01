import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-portfolio';
  CurrentSetion = ''
  handleMenuSelection(selection: string) {
    // Realiza acciones según la selección del menú
    this.CurrentSetion = selection
  }
}
