import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TweetService } from '../../services/tweet/tweet.service';
import { UserService } from '../../services/user/user.service';
import { Tweet } from '../../types/tweet';
import { TweetComponent } from '../../components/tweet/tweet.component';
import { CreateComponent } from '../../components/create/create.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tweetspage',
  imports: [CommonModule, TweetComponent, CreateComponent],
  templateUrl: './tweetspage.component.html',
  styleUrl: './tweetspage.component.scss',
})
export class TweetspageComponent implements OnInit {

  error: boolean = false;

  author = '';
  tweets$!: Observable<Tweet[]>;

  constructor(
    private userService: UserService,
    private tweetService: TweetService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.userService.isUserSetted()) {
      this.router.navigate(['/']);
    } else {
      this.author = this.userService.name;
    }

    this.tweetService.getTweets();
    this.tweets$ = this.tweetService.tweets$;
  }

  onCreateTweet(message: string) {
    if (!message.trim()) {
      this.error = true;
      return;
    }
    this.tweetService.saveTweet({ author: this.author, message }).subscribe();
  }

  onWriteMessage(message: string) {
    this.error = false;
  }

  ngOnDestroy(): void {
    this.userService.clear();
  }
}
