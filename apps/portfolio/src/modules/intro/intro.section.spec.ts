import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroSection } from './intro.section';

describe('IntroSection', () => {
  let component: IntroSection;
  let fixture: ComponentFixture<IntroSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntroSection],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
