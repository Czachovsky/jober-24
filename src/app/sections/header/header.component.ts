import { Component } from '@angular/core';
import {MenuComponent} from "../../components/menu/menu.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'jober24-header',
  standalone: true,
  imports: [MenuComponent, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
