import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilenameComponent } from './profilename.component';

describe('ProfilenameComponent', () => {
  let component: ProfilenameComponent;
  let fixture: ComponentFixture<ProfilenameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilenameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
