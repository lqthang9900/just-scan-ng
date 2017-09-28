import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";

import { NativeScriptUIDataFormModule } from "nativescript-pro-ui/dataform/angular";

import { profileRouting } from "./profile.routing";
import { ProfileComponent } from "./profile.component";
import { ChangePasswordModule, ChangePasswordComponent } from "./change-password";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptUIDataFormModule,
        profileRouting,
        ChangePasswordModule
    ],
    declarations: [
        ProfileComponent
    ]
})
export class ProfileModule { }