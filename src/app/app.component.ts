import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { useHead } from 'unhead';
import { TitleEditor } from "./components/title-editor/title-editor.component";
import { NgIf } from '@angular/common';
import { ConfettiButton } from "./components/confetti-button/confetti-button.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleEditor, NgIf, ConfettiButton],
  template: `<main class="main">
<title-editor *ngIf="showTitleEditor"></title-editor>

<button (click)="showTitleEditor = false">hide title editor input</button>
</main>`,
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'unhead-angular';

  showTitleEditor = true;

  ngAfterViewInit(): void {
  }
}
