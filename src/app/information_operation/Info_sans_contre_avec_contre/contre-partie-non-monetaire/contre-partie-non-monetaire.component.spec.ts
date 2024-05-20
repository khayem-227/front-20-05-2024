import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContrePartieNonMonetaireComponent } from './contre-partie-non-monetaire.component';

describe('ContrePartieNonMonetaireComponent', () => {
  let component: ContrePartieNonMonetaireComponent;
  let fixture: ComponentFixture<ContrePartieNonMonetaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContrePartieNonMonetaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContrePartieNonMonetaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
