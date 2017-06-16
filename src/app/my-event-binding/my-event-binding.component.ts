import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-my-event-binding',
    template: `
        <input #myInput (keyup)="onKey(myInput.value)">
    `
})
export class MyEventBindingComponent {
    onKey(foo) {
        console.log(`Key pressed: ${foo}`);
        //console.log(`Input value: ${event.currentTarget.value}`);
    }
}
