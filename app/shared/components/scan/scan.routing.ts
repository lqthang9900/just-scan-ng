import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ScanComponent } from "./scan.component";

const scanRoutes: Routes = [
    { path: "feedFocus", component: ScanComponent },
]
export const scanRouting: ModuleWithProviders = RouterModule.forChild(scanRoutes);