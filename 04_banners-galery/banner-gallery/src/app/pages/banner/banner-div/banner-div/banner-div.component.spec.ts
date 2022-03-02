import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerDivComponent } from './banner-div.component';

describe('BannerDivComponent', () => {
  let component: BannerDivComponent;
  let fixture: ComponentFixture<BannerDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
