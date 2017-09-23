import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";

import { templateRouting } from "./template.routing";
import { TemplateComponent } from "./template.component";

@NgModule ({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        templateRouting,
        // ForgotPasswordModule
    ],
    declarations: [
        TemplateComponent
    ]
})
export class TemplateModule {}