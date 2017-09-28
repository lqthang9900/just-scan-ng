import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { Config } from "../../shared";
@Component({
	selector: 'first',
	moduleId: module.id,
	templateUrl: './first.html',
	styleUrls: ['./first.css']
})

export class FirstComponent implements OnInit {

	constructor(
		private routerExtensions: RouterExtensions
	) { }

	ngOnInit() { }

	onProfileTap() {
		this.routerExtensions.navigate(["profile"], {
			transition: Config.ANIMATION_TRANSITION_PAGE
		});
	}

	onUserTap() {
		this.routerExtensions.navigate(["user"], {
			transition: Config.ANIMATION_TRANSITION_PAGE
		});
	}

}