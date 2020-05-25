import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'Moon';
	darkModeIsSelected: boolean = false;
	
	ngOnInit() {
		// dark mode
		if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
			this.darkModeIsSelected = true;
		}
	}
	darkModeCheckboxChange() {
		if(this.darkModeIsSelected) {
			document.body.classList.remove("themedLightOverride");
			document.body.classList.add("themedDarkOverride");
		} else {
			document.body.classList.add("themedLightOverride");
			document.body.classList.remove("themedDarkOverride");
		}
	}
	darkModeFlipClick() {
		this.darkModeIsSelected = !this.darkModeIsSelected;
		if(this.darkModeIsSelected) {
			document.body.classList.remove("themedLightOverride");
			document.body.classList.add("themedDarkOverride");
		} else {
			document.body.classList.add("themedLightOverride");
			document.body.classList.remove("themedDarkOverride");
		}
	}
}
