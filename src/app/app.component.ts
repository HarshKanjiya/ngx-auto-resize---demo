import { Component } from '@angular/core';
import { AutoResize } from 'ngx-auto-resize';
import { ThreadComponent } from './components/thread/thread.component';
import { Clipboard } from "@angular/cdk/clipboard"
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AutoResize, ThreadComponent],
  templateUrl: './app.component.html',
  animations: [
    trigger("copiedAnimation", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateY(20px)" }),
        animate(
          "150ms ease-in-out",
          style({ opacity: 1, transform: "translateY(0)" })
        )
      ]),
      transition(":leave", [
        style({ opacity: 1, transform: "translateY(0)" }),
        animate(
          "150ms ease-in-out",
          style({ opacity: 0, transform: "translateY(20px)" })
        )
      ])
    ]),

  ]
})
export class AppComponent {

  constructor(private board: Clipboard) { }

  isCoppied: boolean = false

  copyYoClipBoard() {
    this.isCoppied = true
    this.board.copy("npm i ngx-auto-resize")
    setTimeout(() => {
      this.isCoppied = false
    }, 1000);
  }
}
