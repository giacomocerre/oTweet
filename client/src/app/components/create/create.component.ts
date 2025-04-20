import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create',
  imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  @Output() createTweet: EventEmitter<string> = new EventEmitter<string>();
  @Output() writingMessage: EventEmitter<string> = new EventEmitter<string>();
  message: string = '';

  onCreate(message: string) {
    this.createTweet.emit(message);
    this.message = '';
  }

  onWrite(message: string) {
    this.writingMessage.emit(message);
  }

}
