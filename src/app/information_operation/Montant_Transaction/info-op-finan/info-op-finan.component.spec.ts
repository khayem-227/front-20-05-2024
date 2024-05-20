import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoOpFinanComponent } from './info-op-finan.component';

describe('InfoOpFinanComponent', () => {
  let component: InfoOpFinanComponent;
  let fixture: ComponentFixture<InfoOpFinanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoOpFinanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoOpFinanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
