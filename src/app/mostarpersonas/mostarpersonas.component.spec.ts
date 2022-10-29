import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostarpersonasComponent } from './mostarpersonas.component';

describe('MostarpersonasComponent', () => {
  let component: MostarpersonasComponent;
  let fixture: ComponentFixture<MostarpersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostarpersonasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostarpersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
