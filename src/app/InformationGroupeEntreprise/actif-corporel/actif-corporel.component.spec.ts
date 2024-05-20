import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActifCorporelComponent } from './actif-corporel.component';

describe('ActifCorporelComponent', () => {
  let component: ActifCorporelComponent;
  let fixture: ComponentFixture<ActifCorporelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActifCorporelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActifCorporelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
