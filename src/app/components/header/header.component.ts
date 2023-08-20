import { Component } from '@angular/core';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  mobileMenu = false;
  readonly faSearch = faSearch;
  readonly faBars = faBars;
}
