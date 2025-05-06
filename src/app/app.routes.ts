import { Routes } from '@angular/router';
import { DetectionComponent } from './detection/detection.component';
import { InfractionComponent } from './infraction/infraction.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';

export const routes: Routes = [
    {path:"home", component: AdminTemplateComponent},
    {path:"detection", component: DetectionComponent},
    {path:"infraction", component: InfractionComponent},
];
