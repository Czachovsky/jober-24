import {EventEmitter, Injectable} from '@angular/core';
import {fromEvent, Observable, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription
  isMobile: boolean | undefined;
  isTablet: boolean | undefined;
  isMiddle: boolean | undefined;
  isBelow1200: boolean | undefined;
  public onResize$ = new EventEmitter<{ isMobile: boolean, isTablet: boolean, width: number }>();

  constructor() {
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe(evt => {
      const window = evt.target as Window;
      this.isMobile = window.innerWidth <= 768;
      this.isTablet = window.innerWidth <= 992;
      this.isBelow1200 = window.innerWidth <= 1200;
      this.isMiddle = window.innerWidth > 768 && window.innerWidth < 1400;
      this.onResize$.emit({isMobile: this.isMobile, isTablet: this.isTablet, width: window.innerWidth});
    })
  }

  getScreenSize() {
    return window.innerWidth;
  }

  setMobile() {
    this.isMobile = this.getScreenSize() <= 768;
    this.isTablet = this.getScreenSize() <= 992;
    this.isBelow1200 = this.getScreenSize() <= 1200;
    this.isMiddle = window.innerWidth >= 768 && window.innerWidth < 1400;
  }

  resetMobile() {
    this.resizeSubscription$.unsubscribe();
  }
}
