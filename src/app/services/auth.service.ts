import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	// user: {uid, email}
	private user: firebase.User;
	constructor(
		public angularFireAuth: AngularFireAuth, // Inject Firebase auth service
	) {
		angularFireAuth.authState.subscribe(user => {
			// console.log(`user login state change observed`);
			this.user = user;
		});
	}

	facebookAuth() {
		return this.authLogin(new firebase.auth.FacebookAuthProvider());
	}

	// getUser() {
	// 	return this.user;
	// }

	isSignedIn() {
		return this.user != null;
	}

	getUserUId() {
		return this.user.uid;
	}

	getUserIdentifier() {
		return this.user.email ? this.user.email : this.user.uid;
	}

	// Auth logic to run auth providers
	authLogin(provider) {
		return this.angularFireAuth.signInWithPopup(provider)
			.then((result) => {
				console.log('You have been successfully logged in!')
			}).catch((error) => {
				console.log(error)
			});
	}

	signOut() {
		this.angularFireAuth.signOut();
	}
}
