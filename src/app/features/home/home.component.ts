import { Component, signal, WritableSignal } from '@angular/core';
import { DjuiComponent } from '@dj-ui/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DjuiComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  layoutId: WritableSignal<string> = signal('home_page.LAYOUT_TEMPLATE');
}
