import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoResize } from 'ngx-auto-resize';

@Component({
  selector: 'thread',
  standalone: true,
  imports: [AutoResize, FormsModule],
  templateUrl: './thread.component.html',
})
export class ThreadComponent {

  threadInputText: string = ""
  count: number = 0

  formDisable: boolean = true

  textAreaCounter(e: any) {
    this.count = e.target.value.trim().length
    this.threadInputText = e.target.value.trim()

    if (e.target.value.trim().length === 0 || this.count > 100) {
      this.formDisable = true
    } else {
      this.formDisable = false
    }
  }
  SubmitThread() {


  }
}

