import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarpersonasComponent } from './actualizarpersonas.component';

describe('ActualizarpersonasComponent', () => {
  let component: ActualizarpersonasComponent;
  let fixture: ComponentFixture<ActualizarpersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarpersonasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarpersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
