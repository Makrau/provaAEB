import { Injectable } from '@angular/core';
import { Headers, Http } from  '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class UserService {
	private serviceUrl = 'http://csf.aeb.gov.br/user';
	private mockUrl = 'api/users'
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	getUsers(): Promise<User[]> {
		return this.http.get(this.mockUrl)
             .toPromise()
             .then(response => response.json().data as User[])
             .catch(this.handleError);
}

	getUser(id: number): Promise<User> {
		const url = `${this.mockUrl}/${id}`
		return this.http.get(url).toPromise()
			.then(response => response.json().data as User)
			.catch(this.handleError);
	}

	update(user: User): Promise<User> {
		const url = `${this.mockUrl}/${user.id}`;
		return this.http.put(url, JSON.stringify(user), {headers: this.headers})
			.toPromise().then(() => user).catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error ocurred on userService!', error);
		return Promise.reject(error.message || error);
	}
}