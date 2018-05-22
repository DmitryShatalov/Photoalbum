import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCardPopupComponent } from './delete-card-popup.component';

describe('DeleteCardPopupComponent', () => {
  let component: DeleteCardPopupComponent;
  let fixture: ComponentFixture<DeleteCardPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCardPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCardPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
