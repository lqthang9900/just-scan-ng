import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { registerElement } from "nativescript-angular/element-registry";
import { routes } from "./app.routing";


import { UserModule } from "./pages/index";
import { setStatusBarColors } from "./shared/tools";

registerElement("CardView", () => require("nativescript-cardview").CardView);
registerElement("Gradient", () => require("nativescript-gradient").Gradient);

setStatusBarColors();

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
        AppRoutingModule,
        UserModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
    ],
})
export class AppModule { }
