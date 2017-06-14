import { Component, Input } from '@angular/core';
import { User } from './user';

@Component({
	selector: 'user-detail',
	templateUrl: './view/user-detail.component.html'
})

export class UserDetailComponent {
	@Input() user: User;
}