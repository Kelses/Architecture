import { animate, animateChild, group, query, state, style, transition, trigger } from "@angular/animations";

export const TRIGGERS = [
    trigger('background', [
        state('opaque', style({ 
            'background-color': 'rgba(0, 0, 0, 0.6)'
        })),
        state('translucent', style({ 
            'background-color': 'rgba(0, 0, 0, 0)'
        })),
        transition('* => *', [
            group([
                animate('0.75s ease-in'),
                query('@text', [ animateChild() ]),
                query('@button', [ animateChild() ])
            ])
        ])
    ]),
    trigger('text', [
        state('visible', style({ 
            opacity: 1,
            transform: 'translateY(0)'
        })),
        state('hidden', style({ 
            opacity: 0,
            transform: 'translateY(300px)'
        })),
        transition('* => *', [
            animate('0.75s ease-in')
        ])
    ]),
    trigger('button', [
        state('down', style({ 
            transform: 'rotate(0deg)'
        })),
        state('up', style({ 
            transform: 'rotate(180deg)'
        })),
        transition('* => *', [
            animate('0.75s ease-in')
        ])
    ])
]