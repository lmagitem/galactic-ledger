import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenChildrenComponent } from './open-children.component';

describe('OpenChildrenComponent', () => {
  let component: OpenChildrenComponent;
  let fixture: ComponentFixture<OpenChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenChildrenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
