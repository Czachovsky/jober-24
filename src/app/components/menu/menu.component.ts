import {Component, inject} from '@angular/core';
import {MenuElements, MenuTypes} from "./menu.types";
import {NgClass, NgIf} from "@angular/common";
import {UtilsService} from "../../services/utils.service";
import {ScreenService} from "../../services/screen.service";

@Component({
  selector: 'jober24-menu',
  standalone: true,
  imports: [
    NgIf,
    NgClass
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  private readonly utils: UtilsService = inject(UtilsService);
  public showMobileMenuActive: boolean = false;
  public showMobileMenuState: boolean = false;
  public readonly menuElements: MenuTypes[] = MenuElements;
  public readonly screen: ScreenService = inject(ScreenService);
  public isMobile: boolean = this.screen.getInitialWidth().width <= 992;

  constructor() {
    this.screen.onResize$.subscribe((dimensons) => {
      this.isMobile = dimensons.width <= 992;
    })
  }

  public goTo(href: string): void {
    this.utils.scrollToElm(document.getElementById(href)!);
    if (this.isMobile) {
      this.showMobileMenuActive = false;
      setTimeout(() => {
        this.showMobileMenuState = false;
      }, 300);
    }
  }

  public hideMobileMenu(e: { target: { classList: { contains: (arg0: string) => any; }; }; }): void {
    if (!e.target.classList.contains('hamburgerBox') && !e.target.classList.contains('hamburgerInner')) {
      this.showMobileMenuState = false;
      setTimeout(() => {
        this.showMobileMenuActive = false;
      }, 300);
    }
  }

  public showMobileMenu(): void {
    if (!this.showMobileMenuActive) {
      this.showMobileMenuActive = true;
      setTimeout(() => {
        this.showMobileMenuState = true;
      }, 300);
    } else {
      this.showMobileMenuActive = false;
      setTimeout(() => {
        this.showMobileMenuState = false;
      }, 300);
    }

  }
}
