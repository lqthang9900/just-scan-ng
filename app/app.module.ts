import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { registerElement } from "nativescript-angular/element-registry";

import { SignInModule } from "./pages/index";

registerElement("CardView", () => require("nativescript-cardview").CardView);

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        SignInModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
    ],
})
export class AppModule { }
