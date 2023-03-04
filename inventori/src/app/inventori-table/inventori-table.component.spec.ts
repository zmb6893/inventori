import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoriTableComponent } from './inventori-table.component';

describe('InventoriTableComponent', () => {
  let component: InventoriTableComponent;
  let fixture: ComponentFixture<InventoriTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoriTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoriTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
