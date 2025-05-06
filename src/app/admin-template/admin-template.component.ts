import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DetectionComponent } from '../detection/detection.component';

@Component({
  selector: 'app-admin-template',
  imports: [MatToolbarModule,MatButtonModule,MatIconModule,MatMenuModule,
    MatSidenavModule,MatListModule,MatDividerModule,RouterOutlet,DetectionComponent,RouterLink

  ],
  standalone:true,
  templateUrl: './admin-template.component.html',
  styleUrl: './admin-template.component.scss'
})
export class AdminTemplateComponent {
  showFiller = false;
}
