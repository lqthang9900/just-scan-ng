import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FirstComponent } from "./first.component";

const firstRoutes: Routes = [
    { path: "first", component: FirstComponent },
]

export const firstRouting: ModuleWithProviders = RouterModule.forChild(firstRoutes);