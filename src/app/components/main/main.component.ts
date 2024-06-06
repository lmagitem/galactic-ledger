import { Component } from '@angular/core';
import { GalaxyComponent } from '../galaxy/galaxy.component';
import { StarSystemComponent } from '../star-system/star-system.component';
import { CoordinatesInputComponent } from '../coordinates-input/coordinates-input.component';
import { SeedInputComponent } from '../seed-input/seed-input.component';
import { OpenChildrenComponent } from '../open-children/open-children.component';
import { OpenDetailsComponent } from '../open-details/open-details.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  standalone: true,
  imports: [
    GalaxyComponent,
    StarSystemComponent,
    CoordinatesInputComponent,
    SeedInputComponent,
    OpenChildrenComponent,
    OpenDetailsComponent,
  ],
})
export class MainComponent {}
