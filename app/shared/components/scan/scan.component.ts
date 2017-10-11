import { Component, OnInit } from '@angular/core';
import { ModalDialogService, ModalDialogOptions, ModalDialogParams } from "nativescript-angular/modal-dialog";
import { BarcodeScanner } from 'nativescript-barcodescanner';
import { Page } from "ui/page";

@Component({
    selector: 'scan',
    moduleId: module.id,
    templateUrl: './scan.html',
    styleUrls: ['./scan.css']
})

export class ScanComponent implements OnInit {

    constructor(
        private page: Page,
        private params: ModalDialogParams, 
        // private changeDetectionRef: ChangeDetectorRef,
        private modalService: ModalDialogService,
        private barcodeScanner: BarcodeScanner
    ) { }

    ngOnInit() { }

    creatingView(args) {
        this.barcodeScanner.scan({
            formats: "CODE_39, CODE_93, CODE_128, DATA_MATRIX, EAN_8, EAN_13, UPC_E, ITF",
            message: " ", // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
            showFlipCameraButton: false,   // default false
            preferFrontCamera: false,     // default false
            showTorchButton: false,        // default false
            beepOnScan: false,             // Play or Suppress beep on scan (default true)
            torchOn: false,               // launch with the flashlight on (default false)
            closeCallback: () => {
                // close modal for IOS
                    // closeCallback();
                console.log('------------------');
            },
            resultDisplayDuration: 500,   // Android only, default 1500 (ms), set to 0 to disable echoing the scanned text
            openSettingsIfPermissionWasPreviouslyDenied: true // On iOS you can send the user to the settings app if access was previously denied
        }, args)
            .then((res) => {
                var app = require("application");
                if (app.android) {
                    // close modal for Android
                        // closeCallback();
                    console.log('------------------');
                }
                // contextFunction(res.text, false);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    closeModal(args) {
        this.params.closeCallback('abababababababab');
    }
}