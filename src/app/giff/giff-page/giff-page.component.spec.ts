import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiffPageComponent } from './giff-page.component';

describe('GiffPageComponent', () => {
  let component: GiffPageComponent;
  let fixture: ComponentFixture<GiffPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiffPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiffPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
