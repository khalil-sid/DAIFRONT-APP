import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {AdminTemplateComponent} from './admin-template/admin-template.component';
import { DetectionComponent } from './detection/detection.component';
import {InfractionComponent} from './infraction/infraction.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AdminTemplateComponent,DetectionComponent
    ,InfractionComponent,RouterLink],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'daiFront-app';
}
