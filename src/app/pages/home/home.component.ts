import { Component, OnInit } from '@angular/core';
import { version } from '../../../../package.json';
import * as isOnline from 'is-online';
import * as isReachable from 'is-reachable';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	version: string = version;
	isOnline: boolean = true;
	isConnectedToServer: boolean = true;
	constructor() { }

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
}
