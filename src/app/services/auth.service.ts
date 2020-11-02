import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(
		public angularFireAuth: AngularFireAuth, // Inject Firebase auth service
	) {}

	facebookAuth() {
		return this.authLogin(new firebase.auth.FacebookAuthProvider());
	}

	// Auth logic to run auth providers
	authLogin(provider) {
	    return this.angularFireAuth.signInWithPopup(provider)
		    .then((result) => {
		    	console.log('You have been successfully logged in!')
		    }).catch((error) => {
		    	console.log(error)
		    })
	 }
}
