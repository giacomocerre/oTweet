import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-modal',
  imports: [],
  templateUrl: './create-modal.component.html',
  styleUrl: './create-modal.component.scss'
})
export class CreateModalComponent {
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
