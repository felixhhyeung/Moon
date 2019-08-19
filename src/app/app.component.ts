import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'Moon';
	darkModeCheckboxIsSelected: boolean = false;

	ngOnInit() {
		// dark mode
		if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
			this.darkModeCheckboxIsSelected = true;
		}
	}
	darkModeCheckboxChange() {
		if(this.darkModeCheckboxIsSelected) {
			document.body.classList.remove("themedLightOverride");
			document.body.classList.add("themedDarkOverride");
		} else {
			document.body.classList.add("themedLightOverride");
			document.body.classList.remove("themedDarkOverride");
		}
	}
}
