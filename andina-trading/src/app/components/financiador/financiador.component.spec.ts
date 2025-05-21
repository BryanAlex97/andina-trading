import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanciadorComponent } from './financiador.component';

describe('FinanciadorComponent', () => {
  let component: FinanciadorComponent;
  let fixture: ComponentFixture<FinanciadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanciadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanciadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
