import { Component } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'register',
  templateUrl: './view/register.component.html',
})

export class RegisterComponent {
	constructor(
		private router: Router
	) {}
	register(): void {
  	this.router.navigate(['/register']);
  }
}