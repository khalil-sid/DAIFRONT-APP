import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-infraction',
  imports: [MatCardModule],
  standalone:true,
  templateUrl: './infraction.component.html',
  styleUrl: './infraction.component.scss'
})
export class InfractionComponent {

}
