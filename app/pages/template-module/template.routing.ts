import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TemplateComponent } from "./template.component";

const templateRoutes: Routes = [
    { path: "template", component: TemplateComponent },
]

export const signInRouting: ModuleWithProviders = RouterModule.forChild(templateRoutes);