import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllphotosComponent } from './allphotos.component';

describe('AllphotosComponent', () => {
  let component: AllphotosComponent;
  let fixture: ComponentFixture<AllphotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllphotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllphotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
