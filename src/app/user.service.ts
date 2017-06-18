import { Injectable } from '@angular/core';
import { Headers, Http } from  '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class UserService {
	private aebUrl = 'http://csf.aeb.gov.br/user';
	private mockUrl = 'api/users'
	private serviceUrl = this.mockUrl; // TODO: make aebUrl works 
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }
	model = new User('modelo', 'senha_modelo', 2);

	getUsers(): Promise<User[]> {
		return this.http.get(this.serviceUrl)
             .toPromise()
             .then(response => response.json().data as User[])
             .catch(this.handleError);
}

	getUser(id: number): Promise<User> {
		const url = `${this.serviceUrl}/${id}`
		return this.http.get(url).toPromise()
			.then(response => response.json().data as User)
			.catch(this.handleError);
	}

	update(user: User): Promise<User> {
		const url = `${this.serviceUrl}/${user.id}`;
		return this.http.put(url, JSON.stringify(user), {headers: this.headers})
			.toPromise().then(() => user).catch(this.handleError);
	}

	update_default(): Promise<User> {
		return this.update(this.model);
	}

	create(username: string, password: string): Promise<User> {
		return this.http.post(this.serviceUrl,
			JSON.stringify({username: username, password: password}),
			{headers: this.headers}).toPromise()
		.then(res => res.json().data as User)
		.catch(this.handleError)
	}

	delete(id: number): Promise<void> {
		const url = `${this.serviceUrl}/${id}`;

		return this.http.delete(url, {headers: this.headers}).toPromise()
			.then(() => null).catch(this.handleError);
	}

	delete_default(): Promise<void> {
		return this.delete(this.model.id);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error ocurred on userService!', error);
		return Promise.reject(error.message || error);
	}
}