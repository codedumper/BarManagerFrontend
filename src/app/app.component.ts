import { Component, inject } from '@angular/core';
import { UserService } from './services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BarManagerFrontend';
  private userService = inject(UserService);
  users = this.userService.users;
  private subscription!: Subscription;

  constructor() {

  }

  ngOnInit() {
    this.userService.getUsers().subscribe();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
