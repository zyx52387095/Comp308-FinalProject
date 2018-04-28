import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h2> In line comp308 </h2>`,
    //templateUrl: './app.component.html',
    styles: [`
        h2{
            color: blue;
        }
    `]
})
export class AppComponent {
    
}