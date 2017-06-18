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
	users: User[];
	valid_username = true;

	onSubmit(username: string, password: string) {
		this.submitted = true
		username = username.trim();
		password = password.trim();

		if(!username || !password) {
			return;
		}
	 this.userService.create(username, password);
	 this.router.navigate(['/users']);
	
	}

	private unique_username(username: string): boolean {
		this.userService.getUsers().then(users => this.users = users);
		var index;

		for(index = 0; index < this.users.length; ++index) {
			if(this.users[index].username === username){
				return false;
			}
		}

		return true;
	}
}