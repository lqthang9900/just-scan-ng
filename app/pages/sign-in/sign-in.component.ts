import { Component, OnInit } from '@angular/core';
import { verifyInput, Utils, Config } from '../../shared';
import { isAndroid } from 'platform';
import { topmost } from 'ui/frame';


@Component({
	selector: 'sign-in',
	moduleId: module.id,
	templateUrl: './sign-in.html',
	styleUrls: ['./sign-in.css']
})

export class SignInComponent implements OnInit {
	private signInConfig: any;
	constructor() {
		this.signInConfig = {
			userName: {
				label: "Tài khoản",
				type: "id",
				id: "userName",
				errors: {
					required: {
						error: false,
						message: Config.ERROR_MESSAGE.USERNAME_REQUIRED
					},
					format: {
						error: false,
						message: Config.ERROR_MESSAGE.USERNAME_FORMAT
					}
				},
				messageError: " ",
				error: false,
				placeHolder: "Tài khoản",
				value: ""
			}, 
			password: {
				label: "Mật khẩu",
				type: "password",
				id: "password",
				errors: {
					required: {
						error: false,
						message: Config.ERROR_MESSAGE.PASSWORD_REQUIRED
					},
					format: {
						error: false,
						message: Config.ERROR_MESSAGE.PASSWORD_FORMAT
					}
				},
				messageError: " ",
				error: false,
				placeHolder: "Mật khẩu",
				value: ""
			},
		}
		if (isAndroid) {

		}
		else {
			topmost().ios.controller.navigationBar.barStyle = 1;
		}
	}

	ngOnInit() {

	}

	checkInput(args) {
		verifyInput(args.object.id, this, this.signInConfig, 'signInConfig');
	}

	signIn(args) {
		var validated = true;
		for (let i in this.signInConfig) {
			if (!verifyInput(this.signInConfig[i].id, this, this.signInConfig, 'signInConfig')) {
				validated = false;
				Utils.toastAlert(this.signInConfig[i].messageError);
				break;
			}
		}
		if (validated) {
			console.log('id: ' + this.signInConfig.userName.value);
			console.log('password: ' + this.signInConfig.password.value);
		}
		
	}

	signUp(args) {
		Utils.navigate('pages/sign-up/sign-up');
	}
}