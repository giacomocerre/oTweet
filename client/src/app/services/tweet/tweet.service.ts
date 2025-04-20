import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../utils/env';
import { CreateTweetPayload, Tweet } from '../../types/tweet';
import { orderTweets } from '../../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  private url = environment.API_BASE_URL;
  private tweetSubject = new BehaviorSubject<Tweet[]>([]);
  public tweets$ = this.tweetSubject.asObservable();

  constructor(private http: HttpClient) {}

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  getTweets(): void {
    this.http.get<Tweet[]>(`${this.url}/tweets`, { headers: this.headers })
      .subscribe((tweets) => {
        this.tweetSubject.next(orderTweets(tweets));
      });
  }

  saveTweet(tweet: CreateTweetPayload): Observable<Tweet> {
    try{
      return this.http.post<Tweet>(`${this.url}/save`, tweet, { headers: this.headers }).pipe(
        tap((savedTweet) => {
          const currentTweets = this.tweetSubject.value;
          this.tweetSubject.next(orderTweets([savedTweet, ...currentTweets]));
        })
      );
    }catch (error) {
      console.error('Error saving tweet:', error);
      return throwError(() => new Error('Error saving tweet'));
    }
  }
}
