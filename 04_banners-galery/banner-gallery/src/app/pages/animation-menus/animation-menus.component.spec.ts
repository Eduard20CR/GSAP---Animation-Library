import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationTypesComponent } from './animation-menus.component';

describe('AnimationTypesComponent', () => {
  let component: AnimationTypesComponent;
  let fixture: ComponentFixture<AnimationTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimationTypesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
