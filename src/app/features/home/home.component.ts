import { Component, signal, WritableSignal } from '@angular/core';
import { DuiComponent } from '@namnguyen191/dui-core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DuiComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  layoutId: WritableSignal<string> = signal('home_page.LAYOUT_TEMPLATE');
}
