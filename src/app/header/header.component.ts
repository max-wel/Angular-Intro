import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() navSelected = new EventEmitter<string>();

  selectNav(routeName) {
    switch (routeName) {
      case 'recipes':
        this.navSelected.emit(routeName);
        break;
      case 'shoppingList':
        this.navSelected.emit(routeName);
        break;
      default:
        break;
    }
  }
}
