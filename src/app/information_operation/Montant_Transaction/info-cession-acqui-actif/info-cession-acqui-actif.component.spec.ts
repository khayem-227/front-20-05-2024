import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCessionAcquiActifComponent } from './info-cession-acqui-actif.component';

describe('InfoCessionAcquiActifComponent', () => {
  let component: InfoCessionAcquiActifComponent;
  let fixture: ComponentFixture<InfoCessionAcquiActifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoCessionAcquiActifComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoCessionAcquiActifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
