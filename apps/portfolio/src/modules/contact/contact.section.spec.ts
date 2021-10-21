import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSection } from './contact.section';

describe('ContactSection', () => {
  let component: ContactSection;
  let fixture: ComponentFixture<ContactSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactSection],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
