import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { useHead } from 'unhead';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'unhead-angular';

  showTitleEditor = true;

  ngAfterViewInit(): void {
    useHead({ title: 'Unhead --- Angular' });
  }
}
