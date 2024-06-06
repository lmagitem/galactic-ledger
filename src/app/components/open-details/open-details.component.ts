import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { StateService } from '../../services/state.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-open-details',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatSlideToggleModule, AsyncPipe],
  templateUrl: './open-details.component.html',
  styleUrl: './open-details.component.css',
})
export class OpenDetailsComponent {
  public openDetails: Observable<boolean> = this.stateService.openDetails.asObservable();

  constructor(private stateService: StateService) {}

  public toggleDetails() {
    this.stateService.openDetails.next(!this.stateService.openDetails.value);
  }
}
