import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";

import { TemplateComponent } from "./template.component";

@NgModule ({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
    ],
    declarations: [
        TemplateComponent
    ]
})
export class TemplateModule {}