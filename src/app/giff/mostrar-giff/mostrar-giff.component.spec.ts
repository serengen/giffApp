import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarGiffComponent } from './mostrar-giff.component';

describe('MostrarGiffComponent', () => {
  let component: MostrarGiffComponent;
  let fixture: ComponentFixture<MostrarGiffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarGiffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarGiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
