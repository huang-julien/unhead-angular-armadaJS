import { Component } from "@angular/core";
import { useScript } from "unhead";

interface confetti {
    confetti: () => void
}

declare global {
    interface Window extends confetti { }
}

@Component({
    standalone: true,
    selector: 'confetti-button',
    template: `
        <button (click)="addConfetti()" [disabled]="!loaded">Add Confetti</button>
    `
})
export class ConfettiButton {
    loaded = false
    scriptInstance

    constructor() {
        this.scriptInstance = useScript<confetti>({
            src: 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.0.1',
        }, {
            use() {
                return { confetti: window.confetti }
            },
        })
        this.scriptInstance.onLoaded((script) => {
            this.loaded = true
            script.confetti()
        })
    }

    addConfetti() {
        if (this.loaded) {
            this.scriptInstance.then(({ confetti }) => {
                confetti()
            })
        }
    }
}