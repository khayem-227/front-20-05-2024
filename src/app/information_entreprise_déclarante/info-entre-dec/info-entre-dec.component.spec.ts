import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEntreDecComponent } from './info-entre-dec.component';

describe('InfoEntreDecComponent', () => {
  let component: InfoEntreDecComponent;
  let fixture: ComponentFixture<InfoEntreDecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoEntreDecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoEntreDecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
