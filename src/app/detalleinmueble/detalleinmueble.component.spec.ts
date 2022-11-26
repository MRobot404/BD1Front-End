import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleinmuebleComponent } from './detalleinmueble.component';

describe('DetalleinmuebleComponent', () => {
  let component: DetalleinmuebleComponent;
  let fixture: ComponentFixture<DetalleinmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleinmuebleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleinmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
