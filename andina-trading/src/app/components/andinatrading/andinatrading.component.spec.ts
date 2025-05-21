import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndinatradingComponent } from './andinatrading.component';

describe('AndinatradingComponent', () => {
  let component: AndinatradingComponent;
  let fixture: ComponentFixture<AndinatradingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AndinatradingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AndinatradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
