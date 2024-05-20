import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationServiceComponent } from './information-service.component';

describe('InformationServiceComponent', () => {
  let component: InformationServiceComponent;
  let fixture: ComponentFixture<InformationServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformationServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
