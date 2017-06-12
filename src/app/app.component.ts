import { Component } from '@angular/core';
import { User } from './user'

const USERS: User[] = [
  { id: 11, password: 'senha_usuario11' },
  { id: 12, password: 'senha_usuario12' },
  { id: 13, password: 'senha_usuario13' },
  { id: 14, password: 'senha_usuario14' },
  { id: 15, password: 'senha_usuario15' },
  { id: 16, password: 'senha_usuario16' },
  { id: 17, password: 'senha_usuario17' },
  { id: 18, password: 'senha_usuario18' },
  { id: 19, password: 'senha_usuario19' },
  { id: 20, password: 'senha_usuario20' }
];

@Component({
  selector: 'my-app',
  template: `
  	<h1>{{title}}</h1>
  	<h2> Lista de Usuários </h2>
  	<ul class="users">
  		<li *ngFor="let user of users" [class.selected]="user === selectedUser" 
  			(click)="onSelect(user)">
  				<span class="badge">{{user.id}}</span> {{user.password}}
  	</li>
  </ul>
  <user-detail [user]="selectedUser"></user-detail>

  `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .users {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .users li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .users li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .users li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .users .text {
    position: relative;
    top: -3px;
  }
  .users .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
  
})
export class AppComponent  { 
	title = 'Prova AEB';
	users = USERS;
	selectedUser: User;

	onSelect(user: User): void {
		this.selectedUser = user;
	}
}
