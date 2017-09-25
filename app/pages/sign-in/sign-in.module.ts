import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";

import { signInRouting } from "./sign-in.routing";
import { SignInComponent } from "./sign-in.component";
import { TNSFontIconModule } from "nativescript-ngx-fonticon";

@NgModule ({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        signInRouting,
        TNSFontIconModule.forRoot({
            'fa': 'fonts/font-awesome.css'
        }),
    ],
    declarations: [
        SignInComponent
    ]
})
export class SignInModule {}