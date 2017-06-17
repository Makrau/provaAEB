import { Component } from '@angular/core';

import { User } from './user';

@Component({
	selector: 'user-form',
	templateUrl: './view/user-form.component.html',
	styleUrls: ['./view/css/user-form.component.css']
})

export class UserFormComponent {
	submitted = false;

	onSubmit() {
	 this.submitted = true
	}
}