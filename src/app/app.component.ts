import { slideInAnimation } from './animations';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
   ]
})
export class AppComponent {
  loading = true;
  loaderEventSum = 0;
  headerInput = [{ title: '[/Home]', path: '/home' },
  { title: '[/Skills]', path: '/skills' },
  { title: '[/Experience]', path: '/experience' },
  { title: '[/Blog]', path: '/blog' }
  ];
  footerInput = [];
  constructor(private router: Router) { }
  handleRoute = (e: any) => {
    console.log(e);
    this.router.navigate(['/' + e]);
  };
  setLoading = (e: any) => {
    if (e === 2 || this.loaderEventSum === 2) {
      this.loading = false;
    } else if (e === true) {
      this.loading = true;
    } else {
      this.loaderEventSum++;
      if (this.loaderEventSum === 2) {
        this.loading = false;
      }
    }

    console.log(this.loaderEventSum, this.loading);
  };
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
