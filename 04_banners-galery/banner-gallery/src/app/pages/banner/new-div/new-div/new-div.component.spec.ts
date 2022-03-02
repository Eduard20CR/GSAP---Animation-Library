import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDivComponent } from './new-div.component';

describe('NewDivComponent', () => {
  let component: NewDivComponent;
  let fixture: ComponentFixture<NewDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
