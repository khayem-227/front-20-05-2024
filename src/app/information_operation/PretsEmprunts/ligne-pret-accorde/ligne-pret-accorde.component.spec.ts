import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LignePretAccordeComponent } from './ligne-pret-accorde.component';

describe('LignePretAccordeComponent', () => {
  let component: LignePretAccordeComponent;
  let fixture: ComponentFixture<LignePretAccordeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LignePretAccordeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LignePretAccordeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
