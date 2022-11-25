import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarclientesComponent } from './actualizarclientes.component';

describe('ActualizarclientesComponent', () => {
  let component: ActualizarclientesComponent;
  let fixture: ComponentFixture<ActualizarclientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarclientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
