import { Component, OnInit } from '@angular/core';
import { version } from '../../../../package.json';
import * as isOnline from 'is-online';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	version: string = version;
	isOnline: boolean = true;
	constructor() { }

	ngOnInit() {
		setInterval(async() => {
			this.isOnline = await isOnline();
		}, 1000);
	}

}
