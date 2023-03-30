import { Component } from '@angular/core';
import { NavigationCancel,
          Event,
          NavigationEnd,
          NavigationError,
          NavigationStart,
          Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Avaliacao Angular';

  constructor(private _router: Router) {
    this._router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }

  // Template para tratativas de navegador styles
  private navigationInterceptor(event: Event): void {
    // if (event instanceof NavigationStart) {
    //   this._loadingBar.start();
    // }
    // if (event instanceof NavigationEnd) {
    //   this._loadingBar.complete();
    // }
    // if (event instanceof NavigationCancel) {
    //   this._loadingBar.stop();
    // }
    // if (event instanceof NavigationError) {
    //   this._loadingBar.stop();
    // }
  }

}
