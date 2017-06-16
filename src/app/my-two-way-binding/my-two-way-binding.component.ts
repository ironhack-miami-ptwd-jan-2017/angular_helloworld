import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-my-two-way-binding',
    template: `
        <input [(ngModel)]="username">
        <p> Hello {{username}}! </p>
    `
})
export class MyTwoWayBindingComponent {}
