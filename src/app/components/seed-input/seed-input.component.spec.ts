import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedInputComponent } from './seed-input.component';

describe('SeedInputComponent', () => {
  let component: SeedInputComponent;
  let fixture: ComponentFixture<SeedInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeedInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeedInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
