import {
    trigger,
    query,
    style,
    animate,
    transition,
    animateChild,
    group
  } from '@angular/animations';
export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          transform: 'scale(1)'
        })
      ]),
      query(':enter', [
        style({ transform:'scale(0)'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({transform:'scale(0)'  }))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({transform:'scale(1)'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
  ]);