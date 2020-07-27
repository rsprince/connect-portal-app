import {
  trigger,
  animate,
  transition,
  style,
  query,
  stagger
} from '@angular/animations';
 
export const routeAnimation = trigger('routeAnimation', [
  transition('* => *', [
    // initial state of element
    query(
      ':enter',
      [style({ opacity: 0 })],
      { optional: true }
    ),
    // leave route (leave comes first to remove last route)
    query(
      ':leave',
      [
        // start
        style({ opacity: 1 }),
        // end
        animate('0.3s linear', style({ opacity: 0 }))
      ],
      { optional: true }
    ),
    // enter route
    query(
      ':self',
      [
        // start
        style({ opacity: 0 }),
        // end
        animate('.3s ease', style({ opacity: 1 }))
      ],
      { optional: true }
    )
  ])
]);
 
export const listAnimation = trigger('listAnimation', [
  transition('* => *', [ // each time the binding value changes
    query(
      '.report-list',
      style({ opacity: 0, transform: 'translateY(10%)' })
    ),
    query(
      '.report-list', [
        stagger('350ms', [
          animate('1s ease-in', style({ opacity: 1, transform: 'translateY(0%)' }))
        ])
      ]
    )
  ])
]);