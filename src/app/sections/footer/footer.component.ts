import {Component, inject} from '@angular/core';
import {footerData, FooterTypes} from "./footer.types";
import {ContactFormComponent} from "../../components/contact-form/contact-form.component";
import {UtilsService} from "../../services/utils.service";

@Component({
  selector: 'jober24-footer',
  standalone: true,
  imports: [
    ContactFormComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  private readonly utils: UtilsService = inject(UtilsService);

  public readonly footerData: FooterTypes = footerData

  public scrollTop(): void {
    this.utils.scrollTop();
  }

}
