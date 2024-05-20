import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemunerationBienComponent } from './remuneration-bien.component';

describe('RemunerationBienComponent', () => {
  let component: RemunerationBienComponent;
  let fixture: ComponentFixture<RemunerationBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemunerationBienComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemunerationBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
