import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";

import { firstRouting } from "./first.routing";
import { FirstComponent } from "./first.component";

@NgModule ({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        firstRouting,
    ],
    declarations: [
        FirstComponent
    ]
})
export class FirstModule {}