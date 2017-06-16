import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-property-binding',
  template: `<img [src]="myImageSource" />`
})
export class MyPropertyBindingComponent {
    myImageSource: string = 'http://placekitten.com/g/300/300';
}
