import {Component, inject, ViewChild} from '@angular/core';
import {timelineObject, TimelineTypes} from "./timeline.types";
import {CarouselComponent, CarouselModule, OwlOptions, SlidesOutputData} from "ngx-owl-carousel-o";
import {NgClass} from "@angular/common";
import {ScreenService} from "../../services/screen.service";

@Component({
  selector: 'jober24-timeline',
  standalone: true,
  imports: [
    CarouselModule,
    NgClass
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  @ViewChild('carousel') carousel!: CarouselComponent;
  public readonly customOptions: OwlOptions = {
    loop: true,
    center: true,
    items: 1,
    dots: false,
    nav: true,
    navText: ['<i class="pi pi-chevron-left"></i>', '<i class="pi pi-chevron-right"></i>']
  }
  public readonly screen: ScreenService = inject(ScreenService);
  public timelineData: TimelineTypes[] = this.adjustSlideIds(this.screen.getInitialWidth().width, timelineObject);


  constructor() {
    this.screen.onResize$.subscribe((dimensons) => {
      this.timelineData = this.adjustSlideIds(dimensons.width, this.timelineData);
    })
  }

  adjustSlideIds(width: number, slides: TimelineTypes[]): TimelineTypes[] {
    if (width > 992) {
      return slides;
    }

    return slides.map((slide, index) => {
      return {
        ...slide,
        id: `owl-slide-${index + 3}`
      };
    });
  }

  onSlideChange(event: SlidesOutputData) {

    this.timelineData.forEach((item: TimelineTypes, index: number) => {
      item.activeState = item.id === event.slides![0].id;
    });
  }

  selectYear(id: string): void {
    console.log(this.carousel)
    this.carousel.to(id);
  }
}
