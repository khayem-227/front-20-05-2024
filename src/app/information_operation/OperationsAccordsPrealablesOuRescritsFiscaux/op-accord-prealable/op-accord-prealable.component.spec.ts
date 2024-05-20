import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpAccordPrealableComponent } from './op-accord-prealable.component';

describe('OpAccordPrealableComponent', () => {
  let component: OpAccordPrealableComponent;
  let fixture: ComponentFixture<OpAccordPrealableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpAccordPrealableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpAccordPrealableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
