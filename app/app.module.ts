import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { registerElement } from "nativescript-angular/element-registry";
import { routes } from "./app.routing";

// import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular";
// import { NativeScriptUIListViewModule } from "nativescript-pro-ui/listview/angular";
// import { NativeScriptUICalendarModule } from "nativescript-pro-ui/calendar/angular";
// import { NativeScriptUIChartModule } from "nativescript-pro-ui/chart/angular";
// import { NativeScriptUIDataFormModule } from "nativescript-pro-ui/dataform/angular";
// import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-pro-ui/autocomplete/angular";
// import { NativeScriptUIGaugesModule } from "nativescript-pro-ui/gauges/angular";

import { BarcodeScanner } from 'nativescript-barcodescanner';

import { UserModule, FirstModule, ProfileModule } from "./pages/index";
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
        // NativeScriptUISideDrawerModule,
        // NativeScriptUIListViewModule,
        // NativeScriptUIDataFormModule,
        UserModule,
        FirstModule, 
        ProfileModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        BarcodeScanner
    ]
})
export class AppModule { }
