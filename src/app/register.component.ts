import { Component } from '@angular/core';
import { Router } from '@angular/router'

import { UserService } from './user.service';


@Component({
  selector: 'register',
  templateUrl: './view/register.component.html',
})

export class RegisterComponent {
	constructor(
		private router: Router,
		private userService: UserService
	) {}
	register(): void {
  	this.router.navigate(['/register']);
  }

  update_default(): void {
  	this.userService.update_default();
  }

  delete_default(): void {
    this.userService.delete_default();
  }
}