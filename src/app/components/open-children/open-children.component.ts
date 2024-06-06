import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { StateService } from '../../services/state.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-open-children',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatSlideToggleModule, AsyncPipe],
  templateUrl: './open-children.component.html',
  styleUrl: './open-children.component.css',
})
export class OpenChildrenComponent {
  public openChildren: Observable<boolean> = this.stateService.openChildren.asObservable();

  constructor(private stateService: StateService) {}

  public toggleChildren() {
    this.stateService.openChildren.next(!this.stateService.openChildren.value);
  }
}
