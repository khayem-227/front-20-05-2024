import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntiteMereComponent } from './entite-mere.component';

describe('EntiteMereComponent', () => {
  let component: EntiteMereComponent;
  let fixture: ComponentFixture<EntiteMereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntiteMereComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntiteMereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
