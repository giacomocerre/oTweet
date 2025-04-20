import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {

  error: boolean = false;

  constructor(private userService: UserService, private router: Router) {
    this.userService.clear();
  }

  onEnter(name: string) {
    if (!name.trim()) {
      this.error = true;
      return;
    }
    this.userService.name = name;
    this.router.navigate(['/tweets']);
  }
}
