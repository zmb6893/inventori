import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeightConfirmationComponent } from './modal.component';
import {MatCardModule} from '@angular/material/card';

describe('WeightConfirmationComponent', () => {
  let component: WeightConfirmationComponent;
  let fixture: ComponentFixture<WeightConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeightConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});