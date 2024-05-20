import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartlieComponent } from './partlie.component';

describe('PartlieComponent', () => {
  let component: PartlieComponent;
  let fixture: ComponentFixture<PartlieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartlieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartlieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
