import { Component } from "@angular/core";

// https://cdn.jsdelivr.net/npm/canvas-confetti@1.0.1
@Component({
    standalone: true,
    selector: 'confetti-button',
    template: `
        <button (click)="addConfetti()" [disabled]="!loaded">Add Confetti</button>
    `
})
export class ConfettiButton {
    loaded = false
    scriptInstance: any

    constructor() {
    }

    addConfetti() {
        if (this.loaded) {
            
        }
    }
}