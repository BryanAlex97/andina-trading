import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComisionistasComponent } from './comisionistas.component';

describe('ComisionistasComponent', () => {
  let component: ComisionistasComponent;
  let fixture: ComponentFixture<ComisionistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComisionistasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComisionistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
