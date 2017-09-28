import { Component, OnInit } from '@angular/core';
import { RadDataFormComponent } from "nativescript-pro-ui/dataform/angular";

@Component({
	selector: 'changePassword',
	moduleId: module.id,
	templateUrl: './change-password.html',
	styleUrls: ['./change-password.css']
})

export class ChangePasswordComponent implements OnInit {
	private passwordData: any;
	constructor() { 
		this.passwordData = {
			oldPassword: '',
			newPassword: '',
			rePassword: '',
		}
	}

	ngOnInit() { }
}