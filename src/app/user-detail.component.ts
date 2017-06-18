import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { User } from './user';
import { UserService } from './user.service'

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'user-detail',
	templateUrl: './view/user-detail.component.html',
	styleUrls: ['./view/css/user-detail.component.css']
})

export class UserDetailComponent implements OnInit{
	constructor(
		private userService: UserService,
		private route: ActivatedRoute,
		private router: Router,
		private location: Location
	) {}

	@Input() user: User;

	ngOnInit(): void {
		this.route.params
			.switchMap((params: Params) => this.userService.getUser(+params['id']))
			.subscribe(user => this.user = user);
	}

	goBack(): void {
  	this.router.navigate(['/users']);
	}

	save(): void {
		this.userService.update(this.user).then(() => this.goBack());
	}

	delete(user: User): void {
  	this.userService.delete(user.id);
  	this.goBack();
  }
}