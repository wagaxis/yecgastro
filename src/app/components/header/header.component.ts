import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  protected readonly faSearch = faSearch;
  protected readonly faBars = faBars;
}
