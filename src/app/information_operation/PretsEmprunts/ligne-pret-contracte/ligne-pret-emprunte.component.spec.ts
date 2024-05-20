import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LignePretEmprunteComponent } from './ligne-pret-emprunte.component';

describe('LignePretEmprunteComponent', () => {
  let component: LignePretEmprunteComponent;
  let fixture: ComponentFixture<LignePretEmprunteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LignePretEmprunteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LignePretEmprunteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
