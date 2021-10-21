import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioSection } from './bio.section';

describe('BioSection', () => {
  let component: BioSection;
  let fixture: ComponentFixture<BioSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BioSection],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
