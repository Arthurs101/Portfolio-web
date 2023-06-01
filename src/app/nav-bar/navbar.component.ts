import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavigationBarComponent {
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  @Output() menuSelection : EventEmitter<string> = new EventEmitter();

  onMenuSelection(selection: string) {
    this.menuSelection.emit(selection);
  }
}




