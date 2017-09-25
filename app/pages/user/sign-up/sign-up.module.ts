import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";

import { SignUpComponent } from "./sign-up.component";
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
        SignUpComponent
    ],
    exports: [SignUpComponent]
})
export class SignUpModule { }