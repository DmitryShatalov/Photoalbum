import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsWrapperComponent } from './comments-wrapper.component';

describe('CommentsWrapperComponent', () => {
  let component: CommentsWrapperComponent;
  let fixture: ComponentFixture<CommentsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
