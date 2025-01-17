import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrkComponent } from './srk.component';

describe('SrkComponent', () => {
  let component: SrkComponent;
  let fixture: ComponentFixture<SrkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SrkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
