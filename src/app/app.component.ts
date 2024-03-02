import { Component } from '@angular/core';
import { AutoResize } from 'ngx-auto-resize';
import { ThreadComponent } from './components/thread/thread.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AutoResize, ThreadComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
}
