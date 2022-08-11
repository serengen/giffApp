import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarGiffComponent } from './buscar-giff.component';

describe('BuscarGiffComponent', () => {
  let component: BuscarGiffComponent;
  let fixture: ComponentFixture<BuscarGiffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarGiffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarGiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
