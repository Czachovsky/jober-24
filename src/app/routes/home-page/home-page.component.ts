import {Component, inject, OnInit} from '@angular/core';
import {BenefitsComponent} from "../../sections/benefits/benefits.component";
import {FeaturesComponent} from "../../sections/features/features.component";
import {HeroComponent} from "../../sections/hero/hero.component";
import {LocationsComponent} from "../../sections/locations/locations.component";
import {ServicesComponent} from "../../sections/services/services.component";
import {TestimonialsComponent} from "../../sections/testimonials/testimonials.component";
import {TimelineComponent} from "../../sections/timeline/timeline.component";
import {WhyUsComponent} from "../../sections/why-us/why-us.component";
import * as AOS from "aos";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'jober24-home-page',
  standalone: true,
  imports: [
    BenefitsComponent,
    FeaturesComponent,
    HeroComponent,
    LocationsComponent,
    ServicesComponent,
    TestimonialsComponent,
    TimelineComponent,
    WhyUsComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  private router: Router = inject(Router);

  ngOnInit(): void {
    AOS.init();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          AOS.init();
        }, 100)
      }
    });
  }
}
