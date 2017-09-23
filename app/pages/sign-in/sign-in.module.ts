import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";

import { signInRouting } from "./sign-in.routing";
import { SignInComponent } from "./sign-in.component";

@NgModule ({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        signInRouting,
        // ForgotPasswordModule
    ],
    declarations: [
        SignInComponent
    ]
})
export class SignInModule {}