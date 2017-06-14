import { Component } from '@angular/core'

@Component({
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		<my-users>
	`
})

export class AppComponent {
	title = 'Prova AEB';
}