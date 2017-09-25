import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";

import { userRouting } from "./user.routing";
import { UserComponent } from "./user.component";
import { SignInModule } from "./sign-in";
import { SignUpModule } from "./sign-up";

@NgModule ({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        userRouting,
        SignInModule,
        SignUpModule
    ],
    declarations: [
        UserComponent
    ]
})
export class UserModule {}