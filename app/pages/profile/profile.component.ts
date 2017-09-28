import { Component, OnInit } from '@angular/core';
import { ChangePasswordComponent } from "./change-password";
import { RadDataFormComponent } from "nativescript-pro-ui/dataform/angular";
import { Utils } from "../../shared";

@Component({
	selector: 'profile',
	moduleId: module.id,
	templateUrl: './profile.html',
	styleUrls: ['./profile.css']
})

export class ProfileComponent implements OnInit {
	private user: any;
	private cityList: Array<any>;
	constructor() {
		Utils.setLightStatusBar();
		this.user = {
			name: 'le thang',
			email: '',
			gender: '',
			age: '',
			phone: '',
			street: '',
			city: '',
			district: '',
		};
		this.cityList = ['Hồ Chí Minh', 'Cần Thơ', 'An Giang']

	}

	ngOnInit() { }


}


