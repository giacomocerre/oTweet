import { Routes } from '@angular/router';
import { TweetspageComponent } from './pages/tweetspage/tweetspage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent,
        title: 'Home page'
      },
      {
        path: 'tweets',
        component: TweetspageComponent,
        title: 'Tweets details'
      },
];