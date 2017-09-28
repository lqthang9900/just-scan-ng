import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile.component";
import { ChangePasswordComponent } from "./change-password";

const profileRoutes: Routes = [
    { path: "profile", component: ProfileComponent },
    { path: "change-password", component: ChangePasswordComponent },
]

export const profileRouting: ModuleWithProviders = RouterModule.forChild(profileRoutes);