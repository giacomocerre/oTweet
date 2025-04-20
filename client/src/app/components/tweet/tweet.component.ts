import { Component, Input } from '@angular/core';
import { Tweet } from '../../types/tweet';

@Component({
  selector: 'app-tweet',
  imports: [],
  templateUrl: './tweet.component.html',
  styleUrl: './tweet.component.scss'
})
export class TweetComponent {
  @Input() tweet!: Tweet;
}
