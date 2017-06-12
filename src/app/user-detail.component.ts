import { Component, Input } from '@angular/core';
import { User } from './user';

@Component({
	selector: 'user-detail',
	template: `
		<div *ngIf="user">
			<h2>Detalhes do usuário {{user.id}}</h2>
			<div>
				<label>id: </label>{{user.id}}
			</div>
			<div>
				<label>password: </label>
        <input [(ngModel)]="user.password" placeholder="password"/>
      </div>
    </div>
		`
})

export class UserDetailComponent {
	@Input() user: User;
}