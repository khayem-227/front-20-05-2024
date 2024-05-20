import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestructurationComponent } from './restructuration.component';

describe('RestructurationComponent', () => {
  let component: RestructurationComponent;
  let fixture: ComponentFixture<RestructurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestructurationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestructurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
