import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Utils } from "../../shared";
import { SignInComponent } from './sign-in';
import { SignUpComponent } from './sign-up';

@Component({
	selector: 'user',
	moduleId: module.id,
	templateUrl: './user.html',
	styleUrls: ['./user.css']
})

export class UserComponent implements OnInit {
	@ViewChild('signInView') signInView: ElementRef;
	@ViewChild('signUpView') signUpView: ElementRef;
	private showScreen: string;
	private showScreenTabView: string;
	constructor() {
		this.showScreen = 'signin';
		this.showScreenTabView = 'signin';
		Utils.setLightStatusBar();
	}

	onChangeViewTap(type) {
		var self = this;
		if (type == 'signin'){
			if (this.showScreen == 'signin') {
				return;
			}
			else {
				this.showScreenTabView = 'signin';
				this.signUpView.nativeElement.class = 'animationHide';
				setTimeout(function() {
					self.showScreen = 'signin';
					self.signInView.nativeElement.class = 'animationShow';
				}, 350);
			}		
		}
		else {
			if (this.showScreen == 'signup') {
				return;
			}
			else {
				this.showScreenTabView = 'signup';
				this.signInView.nativeElement.class = 'animationHide';
				setTimeout(function() {
					self.showScreen = 'signup';
					self.signUpView.nativeElement.class = 'animationShow';
				}, 350);
			}
		}
		
	}

	ngOnInit() { }
}