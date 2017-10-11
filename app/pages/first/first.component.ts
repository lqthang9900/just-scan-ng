import { Component, OnInit, ChangeDetectorRef, ElementRef, ViewContainerRef } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { Config } from "../../shared";
import { ScanComponent } from "../../shared/components";
import { BarcodeScanner } from 'nativescript-barcodescanner';
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";

@Component({
	selector: 'first',
	moduleId: module.id,
	templateUrl: './first.html',
	styleUrls: ['./first.css']
})

export class FirstComponent implements OnInit {

	constructor(
		private routerExtensions: RouterExtensions,
		private modalService: ModalDialogService,
		private viewContainerRef: ViewContainerRef,
		private barcodeScanner: BarcodeScanner
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

	onScanTap() {
		var data = {
			abc: "123123",
			hhh: "tttt"
		}
		var options: ModalDialogOptions = { context: data, fullscreen: true, viewContainerRef: this.viewContainerRef };
		// this.modalService.showModal(ScanComponent, options)
		// 	.then((res) => {
		// 		console.log('res: ' + res)
		// 		console.log('sdsd');
		// 	})
		// 	.catch((err) => {
		// 		console.log('00000000000000000000');
		// 	})
		this.barcodeScanner.hasCameraPermission()
			.then((permitted) => {
				if (permitted) {
					// page.showModal('shared/components/scan-modal/scan-modal', callBackFunction, closeCallbackFunction, (!!app.ios));
					this.modalService.showModal(ScanComponent, options)
						.then((res) => {
							console.log('res: ' + res)
							console.log('sdsd');
						})
						.catch((err) => {
							console.log('00000000000000000000');
						})
				}
				else {
					this.barcodeScanner.requestCameraPermission()
						.then(() => {
							// page.showModal('shared/components/scan-modal/scan-modal', callBackFunction, closeCallbackFunction, (!!app.ios));
							this.modalService.showModal(ScanComponent, options)
								.then((res) => {
									console.log('res: ' + res)
									console.log('sdsd');
								})
								.catch((err) => {
									console.log('00000000000000000000');
								})

						})
						.catch((err) => {
							console.log('sss')
							// dialogs.alert({
							//     title: "Thông Báo",
							//     message: "Vui lòng cho phép ứng dụng truy cập Camera để sử dụng tính năng quét barcode.",
							//     okButtonText: "Trở lại"
							// });
						})
				}
			})
			.catch((err) => {
				console.log(err);
			})
	}

}