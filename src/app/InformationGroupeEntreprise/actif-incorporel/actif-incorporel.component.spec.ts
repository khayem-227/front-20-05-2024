import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActifIncorporelComponent } from './actif-incorporel.component';

describe('ActifIncorporelComponent', () => {
  let component: ActifIncorporelComponent;
  let fixture: ComponentFixture<ActifIncorporelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActifIncorporelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActifIncorporelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
