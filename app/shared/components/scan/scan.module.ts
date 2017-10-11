import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";

import { scanRouting } from "./scan.routing";
import { ScanComponent } from "./scan.component";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        scanRouting,
    ],
    declarations: [
        ScanComponent
    ]
})
export class ScanModule { }
