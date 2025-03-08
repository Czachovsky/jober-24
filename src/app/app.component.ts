import {Component, inject} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./sections/header/header.component";

import {FooterComponent} from "./sections/footer/footer.component";
import {ButtonComponent} from "./components/button/button.component";
import {ToastComponent} from "./components/toast/toast.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ButtonComponent, ToastComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  private router = inject(Router);

  constructor() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }
    });
  }
}
