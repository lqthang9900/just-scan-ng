import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";

import { NativeScriptUIDataFormModule } from "nativescript-pro-ui/dataform/angular";

import { ChangePasswordComponent } from "./change-password.component";

@NgModule ({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptUIDataFormModule
    ],
    declarations: [
        ChangePasswordComponent
    ]
})
export class ChangePasswordModule {}