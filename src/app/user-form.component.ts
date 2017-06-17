import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';
import { UserService } from './user.service';

@Component({
	selector: 'user-form',
	templateUrl: './view/user-form.component.html',
	styleUrls: ['./view/css/user-form.component.css']
})

export class UserFormComponent {
	submitted = false;

	constructor(
		private userService: UserService,
		private router: Router
	) { }

	model = new User('modelo', 'senha_modelo', 2);

	onSubmit(username: string, password: string) {
	 this.submitted = true
	 username = username.trim();
	 password = password.trim();

	 if(!username || !password) {
	 	return;
	 }

	 this.userService.create(username, password)
	 this.router.navigate(['/users'])
	}
}