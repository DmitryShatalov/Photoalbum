import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypostcardComponent } from './mypostcard.component';

describe('MypostcardComponent', () => {
  let component: MypostcardComponent;
  let fixture: ComponentFixture<MypostcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypostcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypostcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
