import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAutreOperationComponent } from './info-autre-operation.component';

describe('InfoAutreOperationComponent', () => {
  let component: InfoAutreOperationComponent;
  let fixture: ComponentFixture<InfoAutreOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoAutreOperationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoAutreOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
