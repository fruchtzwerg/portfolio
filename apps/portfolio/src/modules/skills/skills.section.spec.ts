import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsSection } from './skills.section';

describe('SkillsSection', () => {
  let component: SkillsSection;
  let fixture: ComponentFixture<SkillsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillsSection],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
