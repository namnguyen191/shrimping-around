import { Component, signal, WritableSignal } from '@angular/core';
import { setupDefaultDUI } from '@namnguyen191/dui-common';
import { DuiComponent } from '@namnguyen191/dui-core';

@Component({
  standalone: true,
  imports: [DuiComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  layoutId: WritableSignal<string> = signal('carbon_example_layout_template');

  constructor() {
    setupDefaultDUI();
  }
}
