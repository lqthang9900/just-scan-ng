import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from "./user.component";

const userRoutes: Routes = [
    { path: "user", component: UserComponent },
]

export const userRouting: ModuleWithProviders = RouterModule.forChild(userRoutes);