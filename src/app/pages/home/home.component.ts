import { Component, OnInit } from '@angular/core';
import { version } from '../../../../package.json';
import * as isOnline from 'is-online';
import * as isReachable from 'is-reachable';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { SigninComponent } from '../../components/signin/signin.component';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	version: string = version;
	isOnline: boolean = true;
	isConnectedToServer: boolean = true;
	constructor(
		private ngbModal: NgbModal,
	) { }

	ngOnInit() {
		this.fetchOnlineStatus();
		setInterval(() => {
			this.fetchOnlineStatus();
		}, 5000);
	}

	async fetchOnlineStatus() {
		this.isOnline = await isOnline();
		this.isConnectedToServer = await isReachable('/');
	}

	showSigninComponent() {
		// const modalRef = this.modalService.open(NgbdModalContent);
		//     modalRef.componentInstance.name = 'World';
		this.ngbModal.open(SigninComponent, {
			ariaLabelledBy: 'modal-basic-title'
		}).result.then((result) => {
	    	// this.closeResult = `Closed with: ${result}`;
	    }, (reason) => {
	    	// this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
	    });
	}
}
