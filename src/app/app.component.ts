import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./sections/header/header.component";
import {HeroComponent} from "./sections/hero/hero.component";
import {FooterComponent} from "./sections/footer/footer.component";
import {TestimonialsComponent} from "./sections/testimonials/testimonials.component";
import {ServicesComponent} from "./sections/services/services.component";
import {TimelineComponent} from "./sections/timeline/timeline.component";
import {LocationsComponent} from "./sections/locations/locations.component";
import {FeaturesComponent} from "./sections/features/features.component";
import {ButtonComponent} from "./components/button/button.component";
import {WhyUsComponent} from "./sections/why-us/why-us.component";
import {BenefitsComponent} from "./sections/benefits/benefits.component";
import {ToastComponent} from "./components/toast/toast.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroComponent, FooterComponent, TestimonialsComponent, ServicesComponent, TimelineComponent, LocationsComponent, FeaturesComponent, ButtonComponent, WhyUsComponent, BenefitsComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
