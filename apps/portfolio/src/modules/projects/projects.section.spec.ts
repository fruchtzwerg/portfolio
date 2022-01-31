import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsSection } from './projects.section';

describe('ProjectsSection', () => {
  let component: ProjectsSection;
  let fixture: ComponentFixture<ProjectsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsSection ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
