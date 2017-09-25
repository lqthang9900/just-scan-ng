import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";

import { SignInComponent } from "./sign-in.component";
import { TNSFontIconModule } from "nativescript-ngx-fonticon";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        TNSFontIconModule.forRoot({
            'fa': 'fonts/font-awesome.css'
        }),
    ],
    declarations: [
        SignInComponent
    ],
    exports: [SignInComponent]

})
export class SignInModule { }