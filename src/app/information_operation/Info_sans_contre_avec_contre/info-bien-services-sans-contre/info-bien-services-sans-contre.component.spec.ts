import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBienServicesSansContreComponent } from './info-bien-services-sans-contre.component';

describe('InfoBienServicesSansContreComponent', () => {
  let component: InfoBienServicesSansContreComponent;
  let fixture: ComponentFixture<InfoBienServicesSansContreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoBienServicesSansContreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoBienServicesSansContreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
